import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  getWallet(): string {
    return 'Hello World!';
  }
}
