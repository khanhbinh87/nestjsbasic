import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService) {}

  @Get()
  @Render('home')
  getHello() {
    const mess = this.appService.getHello();
    console.log('port',this.configService.get<string>('PORT'))
    return {
      mess:mess
    }
  }
}
