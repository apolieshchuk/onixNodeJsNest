import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
export declare class BooksController {
    private readonly appService;
    constructor(appService: AppService);
    getBooks(): string;
}
export declare class ApiBooksController {
    private readonly appService;
    constructor(appService: AppService);
    addBook(body: any): string;
}
export declare class UsersController {
    private readonly appService;
    constructor(appService: AppService);
    getBooks(): string;
}
export declare class ApiUsersController {
    private readonly appService;
    constructor(appService: AppService);
    addUser(body: any): string;
}
