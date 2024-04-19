import { Controller } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';


@Controller()
export class WalletController {
  constructor(
    private readonly walletService: WalletService,
    private readonly sharedService: SharedService,
  ) {}

  
  @MessagePattern({ cmd: 'get-wallet' })
  async getWalletBalance(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)

    return this.walletService.getWalletBalance()
  }

  // @MessagePattern({cmd: 'create-wallet'})
  // async create

}
