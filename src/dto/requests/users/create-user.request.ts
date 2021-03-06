import { ApiProperty } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { IsString, IsEmail, Length } from 'class-validator';

@Injectable()
export class CreateUserRequest {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Roy' })
  @IsString()
  @Length(1, 32)
  name: string;

  @ApiProperty({ example: 'qwerty' })
  @IsString()
  @Length(6, 32)
  password: string;
}
