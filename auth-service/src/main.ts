import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AUTH_SERVICE } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  Logger.log(`Starting auth microservice on ${AUTH_SERVICE}:4000`);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: AUTH_SERVICE,
      port: 4000,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(5000);
  Logger.log(`Auth microservice running on ${AUTH_SERVICE}:4000`);
}
bootstrap();
