import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(@InjectRepository(Task) private taskRipo: Repository<Task>) {}

  async create(createTaskDto: CreateTaskDto, user: User) {
    this.logger.verbose('Create Task Service called...');

    return await this.taskRipo
      .createQueryBuilder()
      .insert()
      .into(Task)
      .values({ ...createTaskDto, user })
      .execute();
  }

  async findAll(user: User) {
    this.logger.log('Find All Task Service called...');
    return await this.taskRipo
      .createQueryBuilder()
      .select('task')
      .from(Task, 'task')
      .where('task.userId = :userId', { userId: user.id })
      .getMany();
  }

  async findOne(id: number, user: User) {
    this.logger.log('Find One Task Service called...');
    return await this.taskRipo
      .createQueryBuilder()
      .select('task')
      .from(Task, 'task')
      .where('task.id = :id', { id })
      .andWhere('task.userId = :userId', { userId: user.id })
      .getOne();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, user: User) {
    this.logger.warn('Update Task Service called...');
    return await this.taskRipo
      .createQueryBuilder()
      .update(Task)
      .set(updateTaskDto)
      .where('userId = :userId', { userId: user.id })
      .andWhere('id = :id', { id })
      .execute();
  }

  async remove(id: number, user: User) {
    console.log('user', user);
    this.logger.error('Delete Task Service called...');
    return await this.taskRipo
      .createQueryBuilder('tasks')
      .delete()
      .from(Task)
      .where('userId = :userId', { userId: user.id })
      .andWhere('id = :id', { id })
      .execute();
  }
}
