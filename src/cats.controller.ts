import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Patch,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Get()
  // async findAll();

  // @Get()
  // findByQuery(@Query() query: ListAllCatDto) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findById(@Param('id') id: string) {
  //   return this.catsService.findById(id);
  // }

  @Patch(':id')
  update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return res
      .status(HttpStatus.OK)
      .json({ message: `action updates a #${id} cat`, updateCatDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove a #${id} cat`;
  }
}
