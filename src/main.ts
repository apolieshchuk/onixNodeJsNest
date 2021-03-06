import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Server listening on port ' + process.env.PORT);
  await app.listen(process.env.PORT);
}
bootstrap();
