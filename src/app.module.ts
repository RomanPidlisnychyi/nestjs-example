import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CatsModule],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): any {
//     consumer.apply(logger).forRoutes(CatsController);
// consumer.apply(LoggerMiddleware).forRoutes(CatsController);
// .forRoutes({ path: 'cats', method: RequestMethod.GET });
//   }
// }

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
