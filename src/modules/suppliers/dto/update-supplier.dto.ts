import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @IsString()
  @IsOptional()
  company_name: string;

  @IsString()
  @IsOptional()
  supplier_name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  phone: string;
}
