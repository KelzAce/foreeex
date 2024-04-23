import { Module } from '@nestjs/common';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    SharedModule,
    SharedModule.registerRmq('RATE_SERVICE', process.env.RABBIT_RATE_QUEUE),
  ],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
