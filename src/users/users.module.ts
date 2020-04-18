import { Module } from '@nestjs/common';
import { UsersController, ApiUsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController, ApiUsersController],
  providers: [UserService],
})

export class UsersModule {}
