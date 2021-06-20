// import { createConnection } from 'typeorm';
// import { join } from 'path';
// import { UserEntity, CatEntity } from '../entities';
//
// export const initDatabase = async () => {
//   try {
//     const connection = await createConnection({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'lucky',
//       password: 'lucky',
//       database: 'testing',
//       synchronize: false,
//       logging: true,
//       entities: [UserEntity, CatEntity],
//       migrations: [join(__dirname, '../migrations/*')],
//       cli: {
//         migrationsDir: 'src/migrations',
//       },
//     });
//
//     return connection;
//   } catch (err) {
//     console.log('err', err);
//   }
// };
