import { Injectable } from '@nestjs/common';
import { IsEmail, IsString, Length } from 'class-validator';

@Injectable()
export class LoginUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 32)
  password: string;
}
