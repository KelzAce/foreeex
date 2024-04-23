import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RateService {
  
  async getRate(): Promise<any> {
    const baseCurrency = 'NGN'

    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);

    return response.data;
  }
}