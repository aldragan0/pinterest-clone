import { Controller, Get, Query } from '@nestjs/common';
import { PinsService } from './pins.service';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @Get()
  findAll(@Query('pageNo') pageNo: number) {
    return this.pinsService.findAll(pageNo);
  }

  @Get('search')
  search(
    @Query('query') searchString: string,
    @Query('pageNo') pageNo: number,
  ) {
    return this.pinsService.search(searchString, pageNo);
  }
}
