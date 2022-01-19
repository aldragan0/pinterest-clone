import { Module } from '@nestjs/common';
import { PinsService } from './pins.service';
import { PinsController } from './pins.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_CLIENT',
        transport: Transport.TCP,
        options: {
          host: AUTH_SERVICE,
          port: 4000,
        },
      },
    ]),
    HttpModule,
    ConfigModule,
    TypeOrmModule.forFeature([Page]),
  ],
  controllers: [PinsController],
  providers: [PinsService],
})
export class PinsModule {}
