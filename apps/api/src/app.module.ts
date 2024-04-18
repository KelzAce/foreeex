import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    SharedModule.registerRmq(
      'AUTH_SERVICE', 
      process.env.RABBITMQ_AUTH_QUEUE, 
    ),
    SharedModule.registerRmq(
      'WALLET_SERVICE', 
      process.env.RABBITMQ_WALLET_QUEUE, 
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
