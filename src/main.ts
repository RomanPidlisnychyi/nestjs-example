import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().catch((err) => console.log(err));

// global-scoped filter
// it is the same with 8 row
// import { Module } from '@nestjs/common';
// import { APP_FILTER } from '@nestjs/core';
//
// @Module({
//   providers: [
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//   ],
// })
// export class AppModule {}
