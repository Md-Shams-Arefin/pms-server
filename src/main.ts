import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${AppModule.apiPrefix}`);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(AppModule.port);
}

bootstrap();
