import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  phone: string;
}
