import { createConnection, getConnectionManager } from 'typeorm';
import { join } from 'path';

export const initDatabase = async () => {
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

      return connection;
    } catch (err) {
      if (err.name === 'AlreadyHasActiveConnectionError') {
        connection = getConnectionManager().get('GLOBAL_CONNECTION');
        return connection;
      }
    }
  } catch (err) {
    console.log(err);
  }
};
