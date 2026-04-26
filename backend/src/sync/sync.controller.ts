import { Controller, Post, Body } from '@nestjs/common';
import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post('batch')
  syncBatch(@Body() data: any[]) {
    return this.syncService.syncBalances(data);
  }
}