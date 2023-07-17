import { IsDefined, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsDefined()
  product_name: string;

  @IsString()
  @IsDefined()
  quantity: string;

  @IsString()
  @IsDefined()
  unit_price: string;
}
