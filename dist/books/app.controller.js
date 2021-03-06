"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
let BooksController = class BooksController {
    constructor(appService) {
        this.appService = appService;
    }
    getBooks() {
        return this.appService.getBooks();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BooksController.prototype, "getBooks", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], BooksController);
exports.BooksController = BooksController;
let ApiBooksController = class ApiBooksController {
    constructor(appService) {
        this.appService = appService;
    }
    addBook(body) {
        return this.appService.addBook(body);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ApiBooksController.prototype, "addBook", null);
ApiBooksController = __decorate([
    common_1.Controller('api/books'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ApiBooksController);
exports.ApiBooksController = ApiBooksController;
let UsersController = class UsersController {
    constructor(appService) {
        this.appService = appService;
    }
    getBooks() {
        return this.appService.getUsers();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UsersController.prototype, "getBooks", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], UsersController);
exports.UsersController = UsersController;
let ApiUsersController = class ApiUsersController {
    constructor(appService) {
        this.appService = appService;
    }
    addUser(body) {
        return this.appService.addUser(body);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ApiUsersController.prototype, "addUser", null);
ApiUsersController = __decorate([
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ApiUsersController);
exports.ApiUsersController = ApiUsersController;
//# sourceMappingURL=app.controller.js.map