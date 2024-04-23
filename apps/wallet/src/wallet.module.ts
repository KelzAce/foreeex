import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SharedModule, PostgresDBModule } from '@app/shared';
import { UserEntity } from '@app/shared';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    SharedModule,
    SharedModule.registerRmq('WALLET_SERVICE', process.env.RABBIT_WALLET_QUEUE),
    PostgresDBModule,


    TypeOrmModule.forFeature([ UserEntity ]),
  ],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}

