import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { AuthModule } from './auth';
import { ApartmentModule } from './apartament';
import { AppController } from './app.controller';

@Module({
  // imports: [UserModule, AuthModule, ApartmentModule],
  imports: [AuthModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
