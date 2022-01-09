import { Module } from '@nestjs/common';
import { PinsService } from './pins.service';
import { PinsController } from './pins.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/page.entity';

@Module({
  imports: [HttpModule, ConfigModule,
    TypeOrmModule.forFeature([Page])],
  controllers: [PinsController],
  providers: [PinsService]
})
export class PinsModule { }
