import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from '../interfaces/user.interface';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getBooks() {
    return this.userService.getUsers();
  }
}

@Controller('api/users')
export class ApiUsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() body: User, @Res() res: Response): Promise<any> {
    try {
      const createdUser = await this.userService.addUser(body);
      res.send(createdUser);
    } catch (err) {
      res.sendStatus(HttpStatus.BAD_REQUEST);
    }
  }
}
