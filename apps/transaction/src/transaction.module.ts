import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';


@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    SharedModule,
    SharedModule.registerRmq('TRANSACTION_SERVICE', process.env.RABBIT_TRANSACTION_QUEUE),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
