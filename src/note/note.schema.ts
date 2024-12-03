import { Schema } from 'dynamoose';

export const NoteSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  title: {
    type: String,
    index: {
      name: 'TitleIndex',
    },
  },
  content: {
    type: String,
  },
});
