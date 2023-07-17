// import { Product } from 'src/modules/products/entities/product.entity';
import {
  Column,
  Entity,
  // JoinTable,
  // ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category-name' })
  category_name: string;

  @Column()
  description: string;

  // @ManyToMany(() => Product)
  // @JoinTable()
  // products: Product[];
}
