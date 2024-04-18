import { NestFactory } from '@nestjs/core';
import { WalletModule } from './wallet.module';
import { ConfigService } from '@nestjs/config';
import { SharedService } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(WalletModule);
  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService)

 const queue = configService.get('RABBITMQ_WALLET_QUEUE');

 app.connectMicroservice(sharedService.getRmqOptions(queue))

  app.startAllMicroservices();
}
bootstrap();
