import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDTO } from './dto/createNote.dto';
import { UpdateNoteDTO } from './dto/updateNote.dto';
import { NoteIdDTO } from './dto/noteid.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNote: CreateNoteDTO) {
    return this.noteService.create(createNote);
  }

  @Post('/update')
  update(@Body() updateNote: UpdateNoteDTO) {
    return this.noteService.update(updateNote);
  }

  @Delete(':id')
  delete(@Param() noteId: NoteIdDTO) {
    return this.noteService.delete(noteId);
  }
  @Get(':id')
  getById(@Param() noteId: NoteIdDTO) {
    return this.noteService.findbyId(noteId);
  }
  @Get('/all')
  getAll() {
    return this.noteService.getAll();
  }
}
