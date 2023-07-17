// import { Category } from 'src/modules/categories/entities/category.entity';
// import { Supplier } from 'src/modules/suppliers/entities/supplier.entity';
// import { TransactionDetail } from 'src/modules/transaction-details/entities/transaction-detail.entity';
import {
  Column,
  Entity,
  // JoinTable,
  // ManyToMany,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product-name' })
  product_name: string;

  @Column()
  quantity: string;

  @Column({ name: 'unit-price' })
  unit_price: string;

  // @ManyToMany(() => TransactionDetail)
  // @JoinTable()
  // transactionDetails: TransactionDetail[];

  // @OneToMany(() => Supplier, (supplier) => supplier.product)
  // suppliers: Supplier[];

  // @ManyToMany(() => Category)
  // @JoinTable()
  // categories: Category[];
}
