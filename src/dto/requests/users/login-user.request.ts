import { ApiProperty } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { IsEmail, IsString, Length } from 'class-validator';

@Injectable()
export class LoginUserRequest {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'qwerty' })
  @IsString()
  @Length(6, 32)
  password: string;
}
