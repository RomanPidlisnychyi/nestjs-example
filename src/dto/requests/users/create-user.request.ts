import { Injectable } from '@nestjs/common';
import { IsString, IsEmail, Length } from 'class-validator';

@Injectable()
export class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @Length(1, 32)
  name: string;

  @IsString()
  @Length(6, 32)
  password: string;
}
