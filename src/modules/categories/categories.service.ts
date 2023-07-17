import { Injectable, Logger } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    @InjectRepository(Category) private categoryRipo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    this.logger.verbose('Create Category Service called...');

    return await this.categoryRipo
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values(createCategoryDto)
      .execute();
  }

  async findAll() {
    this.logger.log('Find All Category Service called...');

    return await this.categoryRipo
      .createQueryBuilder()
      .select('category')
      .from(Category, 'category')
      .cache(true)
      // .leftJoinAndSelect('category.products', 'product')
      .getMany();
  }

  async findOne(id: number) {
    this.logger.log('Find One Category Service called...');

    return await this.categoryRipo
      .createQueryBuilder()
      .select('category')
      .from(Category, 'category')
      .where('category.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    this.logger.warn('Update Category Service called...');

    return await this.categoryRipo
      .createQueryBuilder()
      .update(Category)
      .set(updateCategoryDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    this.logger.error('Delete Category Service called...');

    return await this.categoryRipo
      .createQueryBuilder('categories')
      .delete()
      .from(Category)
      .where('id = :id', { id })
      .execute();
  }
}
