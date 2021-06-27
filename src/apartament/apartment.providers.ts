import { Connection } from 'typeorm';
import { Apartment } from '../entities/apartment.entity';

export const apartmentProviders = [
  {
    provide: 'APARTMENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Apartment),
    inject: ['DATABASE_CONNECTION'],
  },
];
