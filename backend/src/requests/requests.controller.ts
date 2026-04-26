import { Controller, Post, Body } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() body: any) {
    const { employeeId, daysRequested } = body;
    return this.requestsService.createRequest(employeeId, daysRequested);
  }
}