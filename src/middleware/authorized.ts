import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth/auth.service';
import { JwtService, JwtModuleOptions } from '@nestjs/jwt';

export function authorized(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
