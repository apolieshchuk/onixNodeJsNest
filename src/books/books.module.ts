import { Module } from '@nestjs/common';
import { BooksController, ApiBooksController } from './books.controller';
import { BookService } from './books.service';

@Module({
  imports: [],
  controllers: [BooksController, ApiBooksController],
  providers: [BookService],
})
export class BooksModule {}
