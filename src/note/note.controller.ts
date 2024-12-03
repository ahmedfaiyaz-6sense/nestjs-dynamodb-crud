import { Controller, Post, Body } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDTO } from './dto/createNote.dto';
import { UpdateNoteDTO } from './dto/updateNote.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNote: CreateNoteDTO) {
    return this.noteService.create(createNote);
  }

  @Post('update')
  async update(@Body() updateNote: UpdateNoteDTO) {
    return this.noteService.update(updateNote);
  }
}
