import { Controller, Post, Body } from '@nestjs/common';
import { BalancesService } from './balances.service';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Post()
  create(@Body() body: any) {
    return this.balancesService.create(body);
  }
}