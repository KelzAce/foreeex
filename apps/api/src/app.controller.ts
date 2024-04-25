import { AuthGuard } from '@app/shared';
import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { registerUserDto } from '../dto/register.dto';
import { loginUserDto } from '../dto/login.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    @Inject('WALLET_SERVICE') private walletService: ClientProxy,
    @Inject('TRANSACTION_SERVICE') private transactionService: ClientProxy,
    @Inject('RATE_SERVICE') private readonly rateService: ClientProxy
  ) {}

  @Get('api/auth/getHello')
  async getHello() {
    return this.authService.send({
      cmd: 'getHello',
    }, {})
  }


  @UseGuards(AuthGuard)  
  @Get('api/wallet/createWallet')
  async getWallet() {
    return this.walletService.send(
      {
        cmd: 'createWallet',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)  
  @Get('api/wallet/getBalance')
  async checkWalletBalance() {
    return this.walletService.send(
      {
        cmd: 'getBalance',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)  
  @Get('api/transaction/History')
  async getTransactionHistory() {
    return this.transactionService.send(
      {
        cmd: 'transactionHistory',
      },
      {},
    );
  }
  
  @Get('api/rate/getRate')
  async getRate() {
    return this.rateService.send(
      {
        cmd: 'getRate',
      },
      {},
    );
  }

  @Post('api/auth/register')
  async register(user: registerUserDto) {
    return this.authService.send(
      {
        cmd: 'register',
      },
      {
       user
      },
    );
  }

  @Post('api/auth/login')
  async login(user: loginUserDto) {
    return this.authService.send(
      {
        cmd: 'login',
      },
      {
       user
      },
    );
  }
}
