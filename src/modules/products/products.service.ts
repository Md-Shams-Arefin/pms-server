import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(Product) private productRipo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    this.logger.verbose('Create Product Service called...');

    return await this.productRipo
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(createProductDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Product Service called...');

    return await this.productRipo
      .createQueryBuilder()
      .select('product')
      .from(Product, 'product')
      .cache(true)
      // .leftJoinAndSelect('product.suppliers', 'supplier')
      // .leftJoinAndSelect('product.categories', 'category')
      // .leftJoinAndSelect('product.transactionDetails', 'transactionDetail')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Product Service called...');

    return await this.productRipo
      .createQueryBuilder()
      .select('product')
      .from(Product, 'product')
      .where('product.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    this.logger.warn('Update Product Service called...');

    return await this.productRipo
      .createQueryBuilder()
      .update(Product)
      .set(updateProductDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Product Service called...');

    return await this.productRipo
      .createQueryBuilder('products')
      .delete()
      .from(Product)
      .where('id = :id', { id })
      .execute();
  }
}
