import { createConnection } from 'typeorm';
import { join } from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'lucky',
        password: 'lucky',
        database: 'testing',
        synchronize: false,
        logging: true,
        entities: [join(__dirname, '/../**/*{.ts,.js}')],
        migrations: [join(__dirname, '../migrations/*')],
        cli: {
          migrationsDir: 'src/migrations',
          entitiesDir: 'src/entities',
        },
      }),
  },
];
