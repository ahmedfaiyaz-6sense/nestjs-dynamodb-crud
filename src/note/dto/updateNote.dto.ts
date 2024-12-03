import { IsNotEmpty, MinLength, IsUUID } from 'class-validator';

export class UpdateNoteDTO {
  @IsUUID(4)
  id: string;
  @IsNotEmpty()
  //@ApiProperty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(1)
  //@ApiProperty()
  content: string;
}
