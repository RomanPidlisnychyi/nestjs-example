import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { UserRoles, UserStars } from '../../../enums';

export class UserResponse {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Roy' })
  @IsString()
  name: string;

  @ApiProperty({ enum: UserRoles, example: UserRoles.ADMIN })
  @IsEnum({ each: true })
  role: UserRoles;

  @ApiProperty({ enum: UserStars, example: [UserStars.ONE] })
  @IsEnum({ each: true })
  stars: UserStars[] | null;
}
