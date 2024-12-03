import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Note, NoteKey } from './note.interface';
@Injectable()
export class NoteService {
  constructor(
    @InjectModel('Note')
    private noteModel: Model<Note, NoteKey>,
  ) {}
  create(note: Note) {
    return this.noteModel.create(note);
  }
}
