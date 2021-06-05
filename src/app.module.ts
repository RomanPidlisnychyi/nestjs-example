import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { LoggerMiddleware, logger } from './middleware/logger.meddleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(logger).forRoutes(CatsController);
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController);
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}

// Multiple middleware
// consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);

//Module re-exporting
// @Module({
//   imports: [CommonModule],
//   exports: [CommonModule],
// })
// export class CoreModule {}

// Global modules
// @Global()
// @Module({
//   controllers: [CatsController],
//   providers: [CatsService],
//   exports: [CatsService],
// })
// export class CatsModule {}
