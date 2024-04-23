import { AuthGuard } from '@app/shared';
import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    @Inject('WALLET_SERVICE') private walletService: ClientProxy,
    @Inject('TRANSACTION_SERVICE') private transactionService: ClientProxy,
    @Inject('RATE_SERVICE') private readonly rateService: ClientProxy
  ) {}


  // @Get('auth')
  // async getUsers() {
  //   return this.authService.send(
  //     {
  //       cmd: 'get-users',
  //     },
  //     {},
  //   );
  // }

  @UseGuards(AuthGuard)  
  @Get('wallet/createWallet')
  async getWallet() {
    return this.walletService.send(
      {
        cmd: 'createWallet',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)  
  @Get('wallet/getBalance')
  async checkWalletBalance() {
    return this.walletService.send(
      {
        cmd: 'getBalance',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)  
  @Get('transaction/transactionHistory')
  async getTransactionHistory() {
    return this.transactionService.send(
      {
        cmd: 'transactionHistory',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)  
  @Get('rate/getRate')
  async getRate() {
    return this.rateService.send(
      {
        cmd: 'getRate',
      },
      {},
    );
  }

  @Post('auth/register')
  async register(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('password') password: string

  ) {
    return this.authService.send(
      {
        cmd: 'register',
      },
      {
        firstName,
        lastName,
        email,
        password
      },
    );
  }

  @Post('auth/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string

  ) {
    return this.authService.send(
      {
        cmd: 'login',
      },
      {
        email,
        password,
      },
    );
  }
}
