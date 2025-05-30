import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck } from './core/interfaces/health.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): Promise<HealthCheck> {
    return this.appService.getHealth();
  }
}
