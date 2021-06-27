import { Controller, Post, Get, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('cats')
@ApiBearerAuth()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    const createdCat = await this.catsService.create(createCatDto);
    return res.status(201).json(createdCat);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const allCats = await this.catsService.findAll();
    return res.status(200).json(allCats);
  }
}
