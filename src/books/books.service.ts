import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class BookService {

  getBooks(): string {
    return 'This is books';
  }

  addBook(@Body() body): string {
    console.log('Book Get clicks')
    return 'Add book';
  }

}
