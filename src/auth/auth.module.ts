import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { userProviders } from '../user/user.providers';
import { catProviders } from '../cats/cat.providers';
import { CatsModule } from '../cats/cats.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    UserModule,
    CatsModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserService,
    ...userProviders,
    ...catProviders,
  ],
  exports: [AuthService],
})
export class AuthModule {}
