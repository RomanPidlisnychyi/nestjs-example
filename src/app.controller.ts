import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserRequest } from './dto/requests/users';
import { AuthService } from './auth/auth.service';
import { User } from './decorators/user.decorator';
import { AuthorizedUser } from './decorators/authorized-user.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@User() user) {
    return this.authService.login(user);
  }

  @Post('auth/register')
  async register(@Body() dto: CreateUserRequest, @Request() req) {
    return this.authService.register(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@User() user) {
    return user;
  }

  @Get()
  getHello(@AuthorizedUser() user) {
    return user;
  }
}
