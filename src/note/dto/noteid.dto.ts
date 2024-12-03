import { IsUUID } from 'class-validator';

export class NoteIdDTO {
  @IsUUID(4)
  id: string;
}
