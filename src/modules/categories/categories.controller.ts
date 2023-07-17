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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  private readonly logger = new Logger(CategoriesController.name);

  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    this.logger.debug('Create Category Controller called.');
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Category Controller called.');
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Category Controller called.');
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    this.logger.debug('Update Category Controller called.');
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Category Controller called.');
    return this.categoriesService.remove(+id);
  }
}
