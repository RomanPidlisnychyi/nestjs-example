import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Res,
  HttpStatus,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllCatDto } from './dto';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    const createdCat = await this.catsService.create(createCatDto);
    return res.status(201).json(createdCat);
  }

  @Get()
  async findAll(@Res() res: Response) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException(
    //   { error: 'This is a castom message', status: HttpStatus.FORBIDDEN },
    //   HttpStatus.FORBIDDEN,
    // );
    throw new ForbiddenException();
    const allCats = this.catsService.findAll();
    res.status(200).json(allCats);
  }

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
  remove(@Param('id') id: string, @Res() res: Response) {
    const result = this.catsService.delete(id);

    return res.status(HttpStatus.OK).json({
      message: result
        ? `Cat #${result} deleted successful`
        : 'Something is wrong',
    });
  }
}
