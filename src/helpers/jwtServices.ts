import { JwtService } from '@nestjs/jwt';

export const jwtServices = new JwtService({
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
});
