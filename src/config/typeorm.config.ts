import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: '101',
  database: 'pms',
  autoLoadEntities: true,
  synchronize: true,
};
