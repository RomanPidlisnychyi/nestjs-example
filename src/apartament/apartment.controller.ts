import {
  Controller,
  Get,
  Delete,
  Post,
  Param,
  ParseUUIDPipe,
  UseGuards,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RolesAuthGuard } from '../guard';
import { CreateApartmentRequest, LoginUserResponse } from '../dto';
import { ValidationPipe } from '../pipes';

@Controller('apartments')
@ApiTags('apartments')
@ApiBearerAuth()
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
  @Post()
  @UseGuards(RolesAuthGuard)
  @ApiOperation({ operationId: 'login' })
  // @ApiOkResponse({ type: LoginUserResponse })
  @ApiBadRequestResponse({ description: 'Create apartment error.' })
  @HttpCode(HttpStatus.OK)
  async create(@Body(new ValidationPipe()) dto: CreateApartmentRequest) {
    console.log(dto);
    return this.apartmentService.create(dto);
  }

  // @Delete('/:id')
  // @UseGuards(RolesAuthGuard)
  // async delete(@Param('id', ParseUUIDPipe) id: string) {
  //   return this.usersService.delete(id);
  // }
  //
  // @Get()
  // @UseGuards(RolesAuthGuard)
  // async findAll() {
  //   return this.usersService.findAll();
  // }
}
