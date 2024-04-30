import { UserEntity } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';

@Injectable()
export class RateService {
  constructor(
    // @InjectRepository(Rate)
    @InjectRepository(UserEntity)
    // private readonly transactionRepository: Repository<Rate>,
    private readonly userRepository: Repository<UserEntity>
  ){}
  
  async getRate(): Promise<any> {
    const baseCurrency = 'NGN'

    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);

    console.log(response.data)

    return response.data;
  }
}