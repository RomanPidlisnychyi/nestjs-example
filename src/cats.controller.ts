import {
  Controller,
  Get,
  Post,
  HttpCode,
  Header,
  Query,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findByQuery(@Query('cat') cat) {
    return this.catsService.findByQuery(cat);
  }

  findAll(): string {
    return this.catsService.findAll();
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  createCat(@Body('name') name): string {
    return this.catsService.createCat(name);
  }
}
