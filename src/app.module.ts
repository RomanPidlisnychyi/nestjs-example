import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { AuthModule } from './auth';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
