import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly appService: BookService) {}

  @Get()
  getBooks(): string {
    return this.appService.getBooks();
  }
}
@Controller('api/books')
export class ApiBooksController {
  constructor(private readonly appService: BookService) {}

  @Post()
  addBook(@Body() body): string {
    return this.appService.addBook(body);
  }
}
