import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Res,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserRequest } from '../dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserRequest, @Res() res: Response) {
    const newUser = await this.usersService.create(user);

    return res.status(201).json(newUser);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    await this.usersService.delete(id);

    return res.status(204).send();
  }

  @Get()
  async findAll(@Res() res: Response, @Req() req) {
    const allUsers = await this.usersService.findAll();
    res.status(201).json(allUsers);
  }
}
