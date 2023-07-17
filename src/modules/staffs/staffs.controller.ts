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
import { StaffsService } from './staffs.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staffs')
export class StaffsController {
  private readonly logger = new Logger(StaffsController.name);

  constructor(private readonly staffsService: StaffsService) {}

  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    this.logger.debug('Create Staff Controller called.');
    return this.staffsService.create(createStaffDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All Staff Controller called.');
    return this.staffsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One Staff Controller called.');
    return this.staffsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    this.logger.debug('Update Staff Controller called.');
    return this.staffsService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove Staff Controller called.');
    return this.staffsService.remove(+id);
  }
}
