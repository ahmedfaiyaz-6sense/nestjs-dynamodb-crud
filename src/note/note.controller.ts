import { Controller, Post, Body } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.interface';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() note: Note) {
    return this.noteService.create(note);
  }
}
