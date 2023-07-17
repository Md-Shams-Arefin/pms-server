import { Transaction } from 'src/modules/transactions/entities/transaction.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('staffs')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  job: string;

  @Column()
  salary: string;

  @Column()
  commision: string;

  @Column({ name: 'hire-date' })
  hire_date: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(() => Transaction, (transaction) => transaction.staff)
  transactions: Transaction[];
}
