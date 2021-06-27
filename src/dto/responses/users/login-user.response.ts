import { ApiProperty } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { IsString, IsEmail, Length } from 'class-validator';

@Injectable()
export class LoginUserResponse {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Roy' })
  @IsString()
  @Length(1, 32)
  name: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiY2UzNTRkLWYwYzktNDAyMS05ZDljLTU3OWYxNmM3MjMyOSIsImlhdCI6MTYyNDc3Mzk5MSwiZXhwIjoxNjI0ODYwMzkxfQ.R_UzeTElMuky2bPsEJ7UI8z3E-dCmcYR4pC0UgJ1Ngo',
  })
  @IsString()
  token: string;
}
