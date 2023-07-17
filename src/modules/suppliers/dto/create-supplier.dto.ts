import { IsDefined, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @IsDefined()
  company_name: string;

  @IsString()
  @IsDefined()
  supplier_name: string;

  @IsString()
  @IsDefined()
  address: string;

  @IsString()
  @IsDefined()
  phone: string;
}
