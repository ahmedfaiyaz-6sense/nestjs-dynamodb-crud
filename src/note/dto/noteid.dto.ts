import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class NoteIdDTO {
  @IsUUID(4)
  @ApiProperty()
  id: string;
}
