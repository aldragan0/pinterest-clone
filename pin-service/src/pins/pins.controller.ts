import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PinsService } from './pins.service';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) { }

  @Get()
  findAll(@Query('pageNo') pageNo: number) {
    return this.pinsService.findAll(pageNo);
  }
}
