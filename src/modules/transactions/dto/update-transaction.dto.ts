import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @IsString()
  @IsOptional()
  transaction_date: string;
}
