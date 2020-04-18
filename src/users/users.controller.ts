import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getBooks(): string {
    return this.appService.getUsers();
  }
}

@Controller('api/users')
export class ApiUsersController {
  constructor(private readonly appService: UserService) {}

  @Post()
  addUser(@Body() body): string {
    return this.appService.addUser(body);
  }
}
