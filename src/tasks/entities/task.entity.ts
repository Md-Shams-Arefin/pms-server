import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../enum/task-status.enum';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
