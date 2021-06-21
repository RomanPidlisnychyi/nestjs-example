import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

export const bcryptServices = {
  hash(password) {
    return bcrypt.hash(password, +process.env.BCRYPT_SALT);
  },
  async compare(password, hash) {
    const match = await bcrypt.compare(password, hash);
    if (!match) {
      throw new UnauthorizedException();
    }
  },
};
