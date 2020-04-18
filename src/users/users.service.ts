import { Body, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { Model } from 'mongoose';
import { Response } from 'express';
import { Book } from '../interfaces/book.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  getUsers() {
    return this.userModel.find({});
  }

  async addUser(@Body() body: User): Promise<any> {
    return this.userModel.create(body);
  }
}
