import { Controller, Get } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private adapterHost: HttpAdapterHost
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
