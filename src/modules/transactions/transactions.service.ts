import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  private readonly logger = new Logger(TransactionsService.name);

  constructor(
    @InjectRepository(Transaction)
    private transactionRipo: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    this.logger.verbose('Create Transaction Service called...');

    return await this.transactionRipo
      .createQueryBuilder()
      .insert()
      .into(Transaction)
      .values(createTransactionDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Transaction Service called...');

    return await this.transactionRipo
      .createQueryBuilder()
      .select('transaction')
      .from(Transaction, 'transaction')
      // .where('transaction.customerId = :customerId', {
      //   customerId,
      // })
      .cache(true)
      // .leftJoinAndSelect('transaction.customer', 'customer')
      // .leftJoinAndSelect('transaction.staff', 'staff')
      .leftJoinAndSelect('transaction.transactionDetails', 'transactionDetail')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Transaction Service called...');

    return await this.transactionRipo
      .createQueryBuilder()
      .select('transaction')
      .from(Transaction, 'transaction')
      .where('transaction.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    this.logger.warn('Update Transaction Service called...');

    return await this.transactionRipo
      .createQueryBuilder()
      .update(Transaction)
      .set(updateTransactionDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Transaction Service called...');

    return await this.transactionRipo
      .createQueryBuilder('transactions')
      .delete()
      .from(Transaction)
      .where('id = :id', { id })
      .execute();
  }
}
