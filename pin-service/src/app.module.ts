import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './pins/entities/page.entity';
import { Pin } from './pins/entities/pin.entity';
import { PinsModule } from './pins/pins.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      synchronize: true,
      entities: [Pin, Page],
      "extra": {
        "charset": "utf8mb4_unicode_ci"
      }
    }),
    PinsModule],
})
export class AppModule { }
