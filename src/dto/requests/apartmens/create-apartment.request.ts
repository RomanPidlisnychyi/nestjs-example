import { ApiProperty } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { IsNumber, IsEnum } from 'class-validator';
import { APARTMENT_TYPES } from '../../../enums';

@Injectable()
export class CreateApartmentRequest {
  @ApiProperty({ example: 1 })
  @IsNumber()
  number: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  rooms: number;

  @ApiProperty({
    enum: APARTMENT_TYPES,
    enumName: 'APARTMENT_TYPES',
    example: APARTMENT_TYPES.SUITES,
  })
  @IsEnum(APARTMENT_TYPES, { each: true })
  type: APARTMENT_TYPES;
}
