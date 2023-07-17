import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/tasks/entities/task.entity';

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  async validatePassword(password: string) {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
