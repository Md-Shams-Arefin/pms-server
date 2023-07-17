import { IsDefined, IsString } from 'class-validator';

export class CreateTransactionDetailDto {
  @IsString()
  @IsDefined()
  unit_price: string;

  @IsString()
  @IsDefined()
  quantity: string;

  @IsString()
  @IsDefined()
  discount: string;
}
