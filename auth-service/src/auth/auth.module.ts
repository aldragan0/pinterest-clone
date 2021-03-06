import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../guards/local.strategy';
import { AuthController } from './auth.controller';
import constants from './constants';
import { USER_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_CLIENT',
        transport: Transport.TCP,
        options: {
          host: USER_SERVICE,
          port: 4010,
        },
      },
    ]),
    JwtModule.register({
      secret: constants.jwtSecret,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
