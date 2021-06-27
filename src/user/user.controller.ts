import {
  Controller,
  Get,
  Delete,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesAuthGuard } from '../guard';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Delete('/:id')
  @UseGuards(RolesAuthGuard)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.delete(id);
  }

  @Get()
  @UseGuards(RolesAuthGuard)
  async findAll() {
    return this.usersService.findAll();
  }
}
