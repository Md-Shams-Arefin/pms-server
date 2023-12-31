// import { Transaction } from 'src/modules/transactions/entities/transaction.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  // @OneToMany(() => Transaction, (transaction) => transaction.customer)
  // transactions: Transaction[];
}
