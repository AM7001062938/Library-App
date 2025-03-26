export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isAvailable: boolean;
}

export type BookFormData = Omit<Book, 'id'>;