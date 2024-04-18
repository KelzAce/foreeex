import { Controller } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';
import { AuthGuard } from '@app/shared/auth.guard';

@Controller()
export class WalletController {
  constructor(
    private readonly walletService: WalletService,
    private readonly sharedService: SharedService,
    private readonly authGuard: AuthGuard
  ) {}

  @MessagePattern({ cmd: 'get-wallet' })
  async getUsers(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)

    return this.walletService.getWallet()
  }
}
