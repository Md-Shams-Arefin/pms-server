import { Injectable, Logger } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private readonly logger = new Logger(CustomersService.name);

  constructor(
    @InjectRepository(Customer) private customerRipo: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    this.logger.verbose('Create Customer Service called...');

    return await this.customerRipo
      .createQueryBuilder()
      .insert()
      .into(Customer)
      .values(createCustomerDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Customer Service called...');

    return await this.customerRipo
      .createQueryBuilder()
      .select('customer')
      .from(Customer, 'customer')
      .cache(true)
      // .leftJoinAndSelect('customer.transactions', 'transaction')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Customer Service called...');

    return await this.customerRipo
      .createQueryBuilder()
      .select('customer')
      .from(Customer, 'customer')
      .where('customer.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    this.logger.warn('Update Customer Service called...');

    return await this.customerRipo
      .createQueryBuilder()
      .update(Customer)
      .set(updateCustomerDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Customer Service called...');

    return await this.customerRipo
      .createQueryBuilder('customers')
      .delete()
      .from(Customer)
      .where('id = :id', { id })
      .execute();
  }
}
