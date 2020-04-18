import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(@Res() res: Response): void {
    const html = '<h1> Use routes </h1>' +
      '<h3> POST api/users - Add new user </h3>' +
      '<h5 style="margin-left: 20px">   ' +
      '  firstName: { type: String, required:true },<br>' +
      '  lastName: { type: String, required:true },<br>' +
      '  email: { type: String, required:true },<br>' +
      '  isAdmin: { type: Boolean, required:true },<br>' +
      '  verified: { type: Boolean, required:true },</h5>' +
      '<h3> POST api/books - Add new book </h3>' +
      '<h5 style="margin-left: 20px">  ' +
      '  blogpost: { type: String, required:true },<br>' +
      '  title: { type: String, required:true },<br>' +
      '  author: { type: String, required:true },<br>' +
      '  published:{<br>' +
      '    publisher: { type: String, required:true },<br>' +
      '    year: { type: Number, required:true },<br>' +
      '<h3> GET /users - Get users list </h3>' +
      '<h3> GET /books - Get books list</h3>'
    res.send(html);
  }
}
