import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDTO } from './dto/createNote.dto';
import { UpdateNoteDTO } from './dto/updateNote.dto';
import { NoteIdDTO } from './dto/noteid.dto';
import { PopulateAmountDTO } from './dto/populateAmount.dto';
import { FilterNoteDTO } from './dto/filterNote.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNote: CreateNoteDTO) {
    return this.noteService.create(createNote);
  }
  @Get('/all')
  getAll() {
    return this.noteService.getAll();
  }
  @Post('/populate')
  populate(@Body() amount: PopulateAmountDTO) {
    return this.noteService.populate(amount);
  }
  @Get('/filter/:text')
  @ApiParam({
    name: 'text',
    type: String,
    description: 'Filter text for the notes',
  })
  searchNote(@Param() filterNote: FilterNoteDTO) {
    return this.noteService.filter(filterNote);
  }
  @Put(':id')
  update(@Param() noteId: NoteIdDTO, @Body() updateNote: UpdateNoteDTO) {
    return this.noteService.update(noteId, updateNote);
  }

  @Delete(':id')
  delete(@Param() noteId: NoteIdDTO) {
    return this.noteService.delete(noteId);
  }
  @Get(':id')
  getById(@Param() noteId: NoteIdDTO) {
    return this.noteService.findbyId(noteId);
  }
}
