import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Note, NoteKey } from './note.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateNoteDTO } from './dto/createNote.dto';
import { UpdateNoteDTO } from './dto/updateNote.dto';
import { NoteIdDTO } from './dto/noteid.dto';
@Injectable()
export class NoteService {
  constructor(
    @InjectModel('Note')
    private noteModel: Model<Note, NoteKey>,
  ) {}
  async create(createNote: CreateNoteDTO) {
    const { title, content } = createNote;
    const note = {
      title,
      content,
      id: uuidv4(),
    };

    return await this.noteModel.create(note);
  }
  async update(noteId: NoteIdDTO, updateNote: UpdateNoteDTO) {
    //const { id, title, content } = updateNote;
    const note = {
      id: noteId.id,
      title: updateNote.title,
      content: updateNote.content,
    };
    return await this.noteModel.update(note);
  }
  async findbyId(noteId: NoteIdDTO) {
    const note = await this.noteModel.get(noteId);
    return note;
  }
  async delete(noteId: NoteIdDTO) {
    if (await this.findbyId(noteId)) {
      console.log(noteId);
      return this.noteModel.delete(noteId);
    } else {
      throw new NotFoundException('Note not found');
    }
  }

  getAll() {
    return this.noteModel.scan().exec();
  }
}
