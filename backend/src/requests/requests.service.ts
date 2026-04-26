import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TimeOffRequest } from './requests.entity';
import { Balance } from '../balances/balance.entity';
import { SyncService } from 'src/sync/sync.service';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(TimeOffRequest)
    private requestRepo: Repository<TimeOffRequest>,

    @InjectRepository(Balance)
    private balanceRepo: Repository<Balance>,

    private syncService: SyncService,
  ) { }
  async createRequest(employeeId: number, daysRequested: number) {
    const balance = await this.balanceRepo.findOne({
      where: { employeeId },
    });

    let status = 'rejected';

    try {
      const hcmResponse = await this.syncService.validateRequest(
        employeeId,
        daysRequested,
      );

      if (
        balance &&
        (balance.totalDays - balance.usedDays) >= daysRequested &&
        hcmResponse.status === 'approved'
      ) {
        status = 'approved';

        balance.usedDays += daysRequested;
        await this.balanceRepo.save(balance);
      }
    } catch (error) {
      // fallback if HCM fails
      if (balance && (balance.totalDays - balance.usedDays) >= daysRequested) {
        status = 'approved';
      }
    }

    const request = this.requestRepo.create({
      employeeId,
      daysRequested,
      status,
    });

    return this.requestRepo.save(request);
  }

}