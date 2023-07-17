import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { GetUser } from 'src/users/get-user.decorator';
// import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  private readonly logger = new Logger(TasksController.name);
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @GetUser() user: User) {
    this.logger.debug('Create Task Controller called.');
    return this.tasksService.create(createTaskDto, user);
  }

  @Get()
  findAll(@GetUser() user: User) {
    this.logger.debug('Find All Task Controller called.');
    return this.tasksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: User) {
    this.logger.debug('Find One Task Controller called.');
    return this.tasksService.findOne(+id, user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser() user: User,
  ) {
    this.logger.debug('Update Task Controller called.');
    return this.tasksService.update(+id, updateTaskDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: User) {
    this.logger.debug('Remove Task Controller called.');
    return this.tasksService.remove(+id, user);
  }
}
