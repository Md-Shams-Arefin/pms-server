import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { TransactionDetailsService } from './transaction-details.service';
import { CreateTransactionDetailDto } from './dto/create-transaction-detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction-detail.dto';

@Controller('transaction-details')
export class TransactionDetailsController {
  private readonly logger = new Logger(TransactionDetailsController.name);

  constructor(
    private readonly transactionDetailsService: TransactionDetailsService,
  ) {}

  @Post()
  create(@Body() createTransactionDetailDto: CreateTransactionDetailDto) {
    this.logger.debug('Create Transaction Detail Controller called.');
    return this.transactionDetailsService.create(createTransactionDetailDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Transaction Detail Controller called.');
    return this.transactionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Transaction Detail Controller called.');
    return this.transactionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDetailDto: UpdateTransactionDetailDto,
  ) {
    this.logger.debug('Update Transaction Detail Controller called.');
    return this.transactionDetailsService.update(
      +id,
      updateTransactionDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Transaction Detail Controller called.');
    return this.transactionDetailsService.remove(+id);
  }
}
