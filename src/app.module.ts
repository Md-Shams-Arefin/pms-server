import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { TransactionDetailsModule } from './modules/transaction-details/transaction-details.module';
import { StaffsModule } from './modules/staffs/staffs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath:`.env.${process.env.NODE_ENV}`
    }),
    UsersModule,
    AuthModule,
    TasksModule,
    SuppliersModule,
    CustomersModule,
    ProductsModule,
    CategoriesModule,
    TransactionsModule,
    TransactionDetailsModule,
    StaffsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  static apiPrefix: string;

  constructor(private configService: ConfigService) {
    AppModule.port = this.configService.get('PORT');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
  }
}
