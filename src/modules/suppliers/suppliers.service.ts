import { Injectable, Logger } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {
  private readonly logger = new Logger(SuppliersService.name);

  constructor(
    @InjectRepository(Supplier) private supplierRipo: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    this.logger.verbose('Create Supplier Service called...');

    return await this.supplierRipo
      .createQueryBuilder()
      .insert()
      .into(Supplier)
      .values(createSupplierDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Supplier Service called...');

    return await this.supplierRipo
      .createQueryBuilder()
      .select('supplier')
      .from(Supplier, 'supplier')
      .cache(true)
      // .leftJoinAndSelect('supplier.product', 'product')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Supplier Service called...');

    return await this.supplierRipo
      .createQueryBuilder()
      .select('supplier')
      .from(Supplier, 'supplier')
      .where('supplier.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    this.logger.warn('Update Supplier Service called...');

    return await this.supplierRipo
      .createQueryBuilder()
      .update(Supplier)
      .set(updateSupplierDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Customer Service called...');

    return await this.supplierRipo
      .createQueryBuilder('suppliers')
      .delete()
      .from(Supplier)
      .where('id = :id', { id })
      .execute();
  }
}
