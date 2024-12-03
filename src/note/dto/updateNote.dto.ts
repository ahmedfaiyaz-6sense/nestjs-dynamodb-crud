import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateNoteDTO {
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  content: string;
}
