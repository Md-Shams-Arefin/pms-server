import { IsDefined, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsDefined()
  category_name: string;

  @IsString()
  @IsDefined()
  description: string;
}
