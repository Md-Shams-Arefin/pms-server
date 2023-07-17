import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDetailDto } from './create-transaction-detail.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTransactionDetailDto extends PartialType(
  CreateTransactionDetailDto,
) {
  @IsString()
  @IsOptional()
  unit_price: string;

  @IsString()
  @IsOptional()
  quantity: string;

  @IsString()
  @IsOptional()
  discount: string;
}
