import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { USER_SERVICE } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Logger.log(`Starting microservice on ${USER_SERVICE}:4010`);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: USER_SERVICE,
      port: 4010,
    },
  });

  await app.startAllMicroservices();
  await app.listen(5010);
  Logger.log(`User microservice running on ${USER_SERVICE}:4010`);
}
bootstrap();
