import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController, ApiBooksController } from './books.controller';
import { BookService } from './books.service';
import { BookSchema } from './books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController, ApiBooksController],
  providers: [BookService],
})
export class BooksModule {}
