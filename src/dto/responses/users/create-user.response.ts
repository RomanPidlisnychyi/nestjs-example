import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserResponse {
  @ApiProperty({ example: 'success' })
  @IsString()
  message: string;
}
