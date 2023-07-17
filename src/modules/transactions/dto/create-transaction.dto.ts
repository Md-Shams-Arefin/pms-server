import { IsDefined, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsDefined()
  transaction_date: string;

  //   @IsString()
  //   @IsDefined()
  //   customerId: string;
}
