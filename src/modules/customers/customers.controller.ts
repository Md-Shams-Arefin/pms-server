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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  private readonly logger = new Logger(CustomersController.name);

  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    this.logger.debug('Create Customer Controller called.');
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Customer Controller called.');
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Customer Controller called.');
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    this.logger.debug('Update Customer Controller called.');
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Customer Controller called.');
    return this.customersService.remove(+id);
  }
}
