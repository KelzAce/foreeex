import { Controller } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';
import { Wallet } from './entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';


@Controller()
export class WalletController {
  constructor(
    private readonly walletService: WalletService,
    private readonly sharedService: SharedService,
  ) {}

  
  @MessagePattern({ cmd: 'getBalance' })
  async getBalance(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)

    return this.walletService.getBalance({})
  }

  @MessagePattern({ cmd: 'createWallet' })
  async createWallet(@Ctx() context: RmqContext, 
  @Payload() newWallet: CreateWalletDto
): Promise<Wallet> {
    this.sharedService.acknowledgeMessage(context)

    return this.walletService.createWallet(newWallet)
  };
}
