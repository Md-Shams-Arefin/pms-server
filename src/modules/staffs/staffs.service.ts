import { Injectable, Logger } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffsService {
  private readonly logger = new Logger(StaffsService.name);

  constructor(@InjectRepository(Staff) private staffRipo: Repository<Staff>) {}

  async create(createStaffDto: CreateStaffDto) {
    this.logger.verbose('Create Staff Service called...');

    return await this.staffRipo
      .createQueryBuilder()
      .insert()
      .into(Staff)
      .values(createStaffDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Staff Service called...');

    return await this.staffRipo
      .createQueryBuilder()
      .select('staff')
      .from(Staff, 'staff')
      .cache(true)
      .leftJoinAndSelect('staff.transactions', 'transaction')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Staff Service called...');

    return await this.staffRipo
      .createQueryBuilder()
      .select('staff')
      .from(Staff, 'staff')
      .where('staff.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    this.logger.warn('Update Staff Service called...');

    return await this.staffRipo
      .createQueryBuilder()
      .update(Staff)
      .set(updateStaffDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Staff Service called...');

    return await this.staffRipo
      .createQueryBuilder('suppliers')
      .delete()
      .from(Staff)
      .where('id = :id', { id })
      .execute();
  }
}
