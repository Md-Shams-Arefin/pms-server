import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  create(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    this.logger.debug('Create User Controller called.');
    return this.authService.signUp(authCredentialsDto);
  }

  @Get()
  findAll() {
    this.logger.debug('Find All User Controller called.');
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug('Find One User Controller called.');
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.logger.debug('Update User Controller called.');
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.debug('Remove User Controller called.');
    return this.usersService.remove(+id);
  }
}
