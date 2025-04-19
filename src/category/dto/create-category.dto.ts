import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({ example: 'Travels', description: 'Unique category name' })
  name: string;
}
