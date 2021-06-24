import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { catProviders } from '../cats/cat.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CatsService } from '../cats/cats.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...catProviders, UserService, CatsService],
  exports: [UserService],
})
export class UserModule {}
