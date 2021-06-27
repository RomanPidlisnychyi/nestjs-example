import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { createConnection, getConnectionManager } from 'typeorm';
import { join } from 'path';
import { User } from '../entities/user.entity';

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let connection;
    try {
      connection = await createConnection({
        name: 'GLOBAL_CONNECTION',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'lucky',
        password: 'lucky',
        database: 'testing',
        synchronize: false, // if you need update migrations - true
        logging: true, // if you need see queries - true
        entities: [join(__dirname, '/../**/*{.ts,.js}')],
        migrations: [join(__dirname, '../migrations/*')],
        cli: {
          migrationsDir: 'src/migrations',
          entitiesDir: 'src/entities',
        },
      });
    } catch (err) {
      if (err.name === 'AlreadyHasActiveConnectionError') {
        connection = getConnectionManager().get('GLOBAL_CONNECTION');
      }
    }

    const userRepo = await connection.getRepository(User);

    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    });

    const token = req.headers?.authorization?.split(' ')[1];

    let user;

    if (token) {
      try {
        const id = await jwtService.verify(token, {
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
