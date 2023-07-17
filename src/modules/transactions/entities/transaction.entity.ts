// import { Customer } from 'src/modules/customers/entities/customer.entity';
import { Staff } from 'src/modules/staffs/entities/staff.entity';
import { TransactionDetail } from 'src/modules/transaction-details/entities/transaction-detail.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'transaction-date' })
  transaction_date: string;

  // @Column()
  // customerId: string;

  @Column()
  staffId: string;

  // @ManyToOne(() => Customer, (customer) => customer.transactions)
  // customer: Customer;

  @ManyToOne(() => Staff, (staff) => staff.transactions)
  staff: Staff;

  @OneToMany(
    () => TransactionDetail,
    (transactionDetail) => transactionDetail.transaction,
  )
  transactionDetails: TransactionDetail[];
}
