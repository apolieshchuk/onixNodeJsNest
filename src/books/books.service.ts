import { Body, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../interfaces/book.interface';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  getBooks() {
    return this.bookModel.find({});
  }

  addBook(@Body() body: Book): Promise<any> {
    return this.bookModel.create(body);
  }
}
