import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('version')
  getVersion(): { build: string } {
    // Fetch the BUILD_VERSION from environment variables
    const buildVersion = process.env.BUILD_VERSION || 'Unknown';
    return { build: buildVersion };
  }
}
