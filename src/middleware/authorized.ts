import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    });

    const token = req.headers?.authorization?.split(' ')[1];

    let id;

    if (token) {
      try {
        id = await jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        }).id;
      } catch (err) {
        console.log(err);
      }
    }

    req.user = id && { ...req.user, id };

    next();
  } catch (err) {
    next(err);
  }
}
