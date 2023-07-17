import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional()
  product_name: string;

  @IsString()
  @IsOptional()
  quantity: string;

  @IsString()
  @IsOptional()
  unit_price: string;
}
