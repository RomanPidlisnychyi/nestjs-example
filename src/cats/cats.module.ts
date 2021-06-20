import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { catProviders } from './cat.providers';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [...catProviders, CatsService],
  exports: [CatsService],
})
export class CatsModule {}
