import { Request, Response, NextFunction } from 'express';
import { jwtServices, initDatabase } from '../helpers';
import { User } from '../entities/user.entity';

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const connection = await initDatabase();
    const userRepo = await connection.getRepository(User);

    const token = req.headers?.authorization?.split(' ')[1];

    let user;

    if (token) {
      try {
        const id = await jwtServices.verify(token, {
          secret: process.env.JWT_SECRET,
        }).id;
        user = await userRepo.findOne(id);
      } catch (err) {
        console.log(err);
      }
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}
