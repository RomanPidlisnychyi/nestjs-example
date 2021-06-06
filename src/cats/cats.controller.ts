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
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllCatDto } from './dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe()
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
    @Res() res: Response,
  ) {
    const createdCat = await this.catsService.create(createCatDto);

    return res.status(201).json(createdCat);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const allCats = this.catsService.findAll();
    res.status(200).json(allCats);
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    const cat = this.catsService.findOne(id);
    res.status(200).json(cat);
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
  remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const result = this.catsService.delete(id);

    return res.status(HttpStatus.OK).json({
      message: result
        ? `Cat #${result} deleted successful`
        : 'Something is wrong',
    });
  }
}
