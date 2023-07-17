import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  job: string;

  @IsString()
  @IsDefined()
  salary: string;

  @IsString()
  @IsOptional()
  commision: string;

  @IsString()
  @IsOptional()
  hire_date: string;

  @IsString()
  @IsDefined()
  address: string;

  @IsString()
  @IsDefined()
  phone: string;
}
