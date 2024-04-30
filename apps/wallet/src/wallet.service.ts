import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Wallet } from './entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@app/shared';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ){}

  async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {

    const user = this.userRepository.find()

    if(!user) {
      throw new NotFoundException(`user with ${user}`)
    }

    const wallet = this.walletRepository.create(createWalletDto);

    await this.walletRepository.save(wallet);

    return wallet;
  }

  async getBalance(id: string): Promise<any> {
    const wallet = await this.walletRepository.findOneBy({ id: 'id' });

    return wallet.balance
  }
}
