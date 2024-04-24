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
  @Get('transaction/History')
  async getTransactionHistory() {
    return this.transactionService.send(
      {
        cmd: 'transactionHistory',
      },
      {},
    );
  }
  
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

  @Post('auth/login')
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
