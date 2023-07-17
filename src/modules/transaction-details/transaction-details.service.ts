import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDetailDto } from './dto/create-transaction-detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionDetail } from './entities/transaction-detail.entity';

@Injectable()
export class TransactionDetailsService {
  private readonly logger = new Logger(TransactionDetailsService.name);

  constructor(
    @InjectRepository(TransactionDetail)
    private transactionDetailRipo: Repository<TransactionDetail>,
  ) {}

  async create(createTransactionDetailDto: CreateTransactionDetailDto) {
    this.logger.verbose('Create Transaction Detail Service called...');

    return await this.transactionDetailRipo
      .createQueryBuilder()
      .insert()
      .into(TransactionDetail)
      .values(createTransactionDetailDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Transaction Detail Service called...');

    return await this.transactionDetailRipo
      .createQueryBuilder()
      .select('transactionDetail')
      .from(TransactionDetail, 'transactionDetail')
      .cache(true)
      .leftJoinAndSelect('transactionDetail.transaction', 'transaction')
      // .leftJoinAndSelect('transactionDetail.products', 'product')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Transaction Detail Service called...');

    return await this.transactionDetailRipo
      .createQueryBuilder()
      .select('transactionDetail')
      .from(TransactionDetail, 'transactionDetail')
      .where('transactionDetail.id = :id', { id })
      .getOne();
  }

  async update(
    id: number,
    updateTransactionDetailDto: UpdateTransactionDetailDto,
  ) {
    this.logger.warn('Update Transaction Detail Service called...');

    return await this.transactionDetailRipo
      .createQueryBuilder()
      .update(TransactionDetail)
      .set(updateTransactionDetailDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Transaction Detail Service called...');

    return await this.transactionDetailRipo
      .createQueryBuilder('transaction-details')
      .delete()
      .from(TransactionDetail)
      .where('id = :id', { id })
      .execute();
  }
}
