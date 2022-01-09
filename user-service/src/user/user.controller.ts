import { Body, Controller, HttpException, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from './user.entity';
import { InsertResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<User> {
    return this.userService.findOne({ email: data.email });
  }

  @Post('signup')
  async signUp(@Body() user: User): Promise<InsertResult> {
    try {
      return this.userService.createUser({
        email: user.email,
        username: user.email.split('@')[0],
        password: user.password
      });
    } catch (e) {
      Logger.log(e);
      throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
    }
  }
}