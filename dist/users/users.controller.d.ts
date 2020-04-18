import { UserService } from './users.service';
export declare class UsersController {
    private readonly appService;
    constructor(appService: UserService);
    getBooks(): string;
}
export declare class ApiUsersController {
    private readonly appService;
    constructor(appService: UserService);
    addUser(body: any): string;
}
