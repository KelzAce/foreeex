import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    SharedModule,
    // SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBIT_AUTH_QUEUE)
  ],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
