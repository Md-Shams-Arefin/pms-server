import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await this.usersRepo.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUser(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersRepo.findOne({ where: { username } });
    if (user && user.validatePassword(password)) {
      return user.username;
    }
    return null;
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ access_token: string }> {
    const username = await this.validateUser(authCredentialsDto);

    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
