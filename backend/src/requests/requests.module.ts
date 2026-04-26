import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TimeOffRequest } from './requests.entity';
import { RequestsService } from './requests.service';
import { SyncModule } from 'src/sync/sync.module';
import { RequestsController } from './requests.controller';
import { Balance } from 'src/balances/balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeOffRequest, Balance]),
    SyncModule,
],

  providers: [RequestsService],
  controllers: [RequestsController],
})
export class RequestsModule {}