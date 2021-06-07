import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.meddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();

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
