import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('GET route')
    return 'Hello World!';
  }
}
