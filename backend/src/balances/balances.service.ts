import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Balance } from './balance.entity';

@Injectable()
export class BalancesService {
  constructor(
    @InjectRepository(Balance)
    private balanceRepo: Repository<Balance>,
  ) {}

  async create(data: any) {
    const balance = this.balanceRepo.create(data);
    return this.balanceRepo.save(balance);
  }
}