import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
// require('dotenv').config();

@Module({
  imports: [BooksModule, UsersModule,
    MongooseModule.forRoot(process.env.DB_HOST)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
