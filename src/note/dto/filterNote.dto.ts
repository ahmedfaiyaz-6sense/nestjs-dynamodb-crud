import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FilterNoteDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;
}
