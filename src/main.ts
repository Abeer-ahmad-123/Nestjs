import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //filter out unwanted key values
      forbidNonWhitelisted: true, //send error if  unwanted key values
      transform: true, //tranform body into instance of DTO
      transformOptions: {
        enableImplicitConversion: true, //no longer have to specify types with type decorator
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
