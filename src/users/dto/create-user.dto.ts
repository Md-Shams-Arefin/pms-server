import { IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;

  @IsString()
  @IsOptional()
  salt: string;

  @IsBoolean()
  isActive: boolean;
}
