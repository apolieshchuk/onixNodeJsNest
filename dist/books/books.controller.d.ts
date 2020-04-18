import { BookService } from './books.service';
export declare class BooksController {
    private readonly appService;
    constructor(appService: BookService);
    getBooks(): string;
}
export declare class ApiBooksController {
    private readonly appService;
    constructor(appService: BookService);
    addBook(body: any): string;
}
