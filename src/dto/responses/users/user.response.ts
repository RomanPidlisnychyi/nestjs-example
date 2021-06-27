import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { USER_ROLES, USER_STARS } from '../../../enums';

export class UserResponse {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Roy' })
  @IsString()
  name: string;

  @ApiProperty({ enum: USER_ROLES, example: USER_ROLES.ADMIN })
  @IsEnum(USER_ROLES, { each: true })
  role: USER_ROLES;

  @ApiProperty({ enum: USER_STARS, example: [USER_STARS.ONE] })
  @IsEnum(USER_STARS, { each: true })
  stars: USER_STARS[] | null;
}
