import { IsString, IsInt } from 'class-validator';

export default class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
