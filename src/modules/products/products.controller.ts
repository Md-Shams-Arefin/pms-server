import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  private readonly logger = new Logger(ProductsController.name);

  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    this.logger.debug('Create Product Controller called.');
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Products Controller called.');
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Product Controller called.');
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    this.logger.debug('Update Product Controller called.');
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Product Controller called.');
    return this.productsService.remove(+id);
  }
}
