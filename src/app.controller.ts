import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from './guard';
import {
  CreateUserRequest,
  CreateUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  UserResponse,
} from './dto';
import { AuthService } from './auth';
import { User } from './decorators';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ operationId: 'login' })
  @ApiOkResponse({ type: LoginUserResponse })
  @ApiBadRequestResponse({ description: 'Login error.' })
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginUserRequest) {
    return this.authService.login(dto);
  }

  @Post('register')
  @ApiOperation({ operationId: 'register' })
  @ApiOkResponse({ type: CreateUserResponse })
  @ApiBadRequestResponse({ description: 'Registration error.' })
  @HttpCode(HttpStatus.OK)
  async register(@Body() dto: CreateUserRequest): Promise<CreateUserResponse> {
    return this.authService.register(dto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  @ApiOperation({ operationId: 'profile' })
  @ApiOkResponse({ type: UserResponse })
  @ApiBadRequestResponse({ description: 'Registration error.' })
  @HttpCode(HttpStatus.OK)
  getProfile(@User() user): Promise<UserResponse> {
    const { id, password, ...rest } = user;
    return rest;
  }
}
