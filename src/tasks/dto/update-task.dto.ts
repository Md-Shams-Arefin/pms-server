import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;
}
