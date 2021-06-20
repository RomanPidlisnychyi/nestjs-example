import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';

@Injectable()
export class CreateUserRequest {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
