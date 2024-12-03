export interface NoteKey {
  id: string;
}

export interface Note extends NoteKey {
  title: string;
  content?: string;
}
