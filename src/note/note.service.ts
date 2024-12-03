import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Note, NoteKey } from './note.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateNoteDTO } from './dto/createNote.dto';
import { UpdateNoteDTO } from './dto/updateNote.dto';
import { NoteIdDTO } from './dto/noteid.dto';
import { PopulateAmountDTO } from './dto/populateAmount.dto';
import { faker } from '@faker-js/faker';
import { FilterNoteDTO } from './dto/filterNote.dto';
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

  async populate(amount: PopulateAmountDTO) {
    const batch_notes = [];
    for (let i = 0; i < amount.amount; i++) {
      batch_notes.push({
        id: uuidv4(),
        title: faker.word.adjective(),
        content: faker.lorem.paragraph(),
      });
    }

    return await this.noteModel.batchPut(batch_notes);
  }

  async filter(filterNote: FilterNoteDTO) {
    const { text } = filterNote;
   // console.log('Text to be searched: ' + text);
    return await this.noteModel
      .query('title')
      .eq(text)
      .using('TitleIndex')
      .exec();
  }
}
