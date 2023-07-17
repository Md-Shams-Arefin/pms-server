// import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suppliers')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'company-name' })
  company_name: string;

  @Column({ name: 'supplier-name' })
  supplier_name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  // @Column()
  // productId: string;

  // @ManyToOne(() => Product, (product) => product.suppliers)
  // product: Product;
}
