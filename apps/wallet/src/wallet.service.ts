import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class WalletService {
  getWalletBalance(): string {
  //   try {
  //     const findWallet = await this.walletRepository.findOne({
  //       where: { users: {id: user.id}}
  //     });

  //     if(!findWallet){
  //       throw new NotFoundException("Account not found")
  //     }

  //     return findWallet.balance
  //   } catch (error) {
  //     throw error
  //   }

  return "Hi"
  }
}
