import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';

@Controller()
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly sharedService: SharedService
  ) {}

  @MessagePattern({ cmd: 'transactionHistory' })
  async transactionHistory(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)

    return this.transactionService.transactionHistory()
  }
}
