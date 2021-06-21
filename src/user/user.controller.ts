import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Res,
  Param,
  ParseUUIDPipe,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async create(
    @Body(new ValidationPipe()) dto: CreateUserRequest,
    @Res() res: Response,
  ) {
    const { name, email } = await this.usersService.create(dto);

    return res.status(201).json({ name, email });
  }

  @Post('login')
  async login(
    @Body(new ValidationPipe()) dto: LoginUserRequest,
    @Res() res: Response,
  ) {
    await this.usersService.login(dto);
    return res.status(201).send();
  }

  @Delete('/:id')
  async delete(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    await this.usersService.delete(id);

    return res.status(204).send();
  }

  @Get()
  async findAll(@Res() res: Response, @Req() req) {
    const allUsers = await this.usersService.findAll();
    res.status(201).json(allUsers);
  }
}
