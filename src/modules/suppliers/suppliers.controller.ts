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
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  private readonly logger = new Logger(SuppliersController.name);

  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    this.logger.debug('Create Supplier Controller called.');
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Supplier Controller called.');
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Supplier Controller called.');
    return this.suppliersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    this.logger.debug('Update Supplier Controller called.');
    return this.suppliersService.update(+id, updateSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Supplier Controller called.');
    return this.suppliersService.remove(+id);
  }
}
