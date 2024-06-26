import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule, PostgresDBModule } from '@app/shared';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from '@app/shared';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './jwt.guard';
import { JwtStratgy } from './jwt-strategy';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: 
      ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {expiresIn: '3600s'}
      }),
      inject: [ConfigService]
    }),

    SharedModule,
    PostgresDBModule,

    TypeOrmModule.forFeature([ UserEntity ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard, JwtStratgy],
})
export class AuthModule {}
