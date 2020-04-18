import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  getUsers(): string {
    return 'This is users';
  }

  addUser(@Body() body): string {
    return 'Add user';
  }
}
