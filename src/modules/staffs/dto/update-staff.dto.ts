import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffDto } from './create-staff.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStaffDto extends PartialType(CreateStaffDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  job: string;

  @IsString()
  @IsOptional()
  salary: string;

  @IsString()
  @IsOptional()
  commision: string;

  @IsString()
  @IsOptional()
  hire_date: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  phone: string;
}
