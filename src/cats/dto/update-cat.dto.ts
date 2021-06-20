import { IsString, IsInt, IsDefined } from 'class-validator';

export class UpdateCatDto {
  @IsDefined()
  @IsString()
  name?: string;

  @IsInt()
  age?: number;

  @IsString()
  breed?: string;
}
