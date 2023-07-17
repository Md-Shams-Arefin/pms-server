import { IsDefined, IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class CreateTaskDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;
}
