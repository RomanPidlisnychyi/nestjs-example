import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags()
@ApiBearerAuth()
export class AppController {
  @Get('hello')
  getHello(): string {
    return 'Hello world!';
  }
}
