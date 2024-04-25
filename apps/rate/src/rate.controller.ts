import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';

@Controller()
export class RateController {
  constructor(
    private readonly rateService: RateService,
    private readonly sharedService: SharedService
  ) {}

  @MessagePattern({ cmd: 'getRate' })
  async getRate(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)

    return this.rateService.getRate()
  }
}
