import { IsDefined, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  phone: string;
}
