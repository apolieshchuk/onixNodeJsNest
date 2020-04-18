import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from '../interfaces/book.interface';
import { Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    return this.bookService.getBooks();
  }
}
@Controller('api/books')
export class ApiBooksController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async addBook(@Body() body: Book, @Res() res: Response) {
    try {
      const createdBook = await this.bookService.addBook(body);
      res.send(createdBook);
    } catch (err) {
      res.sendStatus(HttpStatus.BAD_REQUEST);
    }
  }
}
