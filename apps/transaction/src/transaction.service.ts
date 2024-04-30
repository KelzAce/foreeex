import { UserEntity } from '@app/shared';
import { Transaction } from '@app/shared/entities/transaction.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {

  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}

  async transactionHistory(): Promise<any> {
    const transaction = this.transactionRepository.find()

    if(!transaction) {
      throw new NotFoundException('you do not have any transaction')
    }
    return transaction
  }
}
