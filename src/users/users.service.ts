import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(@InjectRepository(User) private userRipo: Repository<User>) {}

  async findAll() {
    this.logger.log('Find All User Service called...');
    return await this.userRipo
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .cache(true)
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One User Service called...');
    return await this.userRipo
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateUserDto: any) {
    this.logger.warn('Update User Service called...');
    return await this.userRipo
      .createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete User Service called...');
    return await this.userRipo
      .createQueryBuilder('users')
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }
}
