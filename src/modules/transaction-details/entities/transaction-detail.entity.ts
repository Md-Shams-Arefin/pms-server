// import { Product } from 'src/modules/products/entities/product.entity';
import { Transaction } from 'src/modules/transactions/entities/transaction.entity';
import {
  Column,
  Entity,
  // JoinTable,
  // ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('transaction-details')
export class TransactionDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'unit-price' })
  unit_price: string;

  @Column()
  quantity: string;

  @Column()
  discount: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.transactionDetails)
  transaction: Transaction;

  // @ManyToMany(() => Product)
  // @JoinTable()
  // products: Product[];
}
