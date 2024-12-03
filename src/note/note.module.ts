import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { NoteSchema } from './note.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Note',
        schema: NoteSchema,
        options: {
          tableName: 'note',
          create: true,
        },
      },
    ]),
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
