import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Note, NoteKey } from './note.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateNoteDTO } from './dto/createNote.dto';
@Injectable()
export class NoteService {
  constructor(
    @InjectModel('Note')
    private noteModel: Model<Note, NoteKey>,
  ) {}
  create(createNote: CreateNoteDTO) {
    const { title, content } = createNote;
    const note = {
      title,
      content,
      id: uuidv4(),
    };

    return this.noteModel.create(note);
  }
}
