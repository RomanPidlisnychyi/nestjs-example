import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEnum } from 'class-validator';
import { APARTMENT_TYPES } from '../enums';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', { unique: true, nullable: false })
  number: number;

  @Column('int', { default: 1 })
  rooms: number;

  @Column({
    enum: APARTMENT_TYPES,
    enumName: 'APARTMENT_TYPES',
    default: APARTMENT_TYPES.SUITES,
  })
  @IsEnum(APARTMENT_TYPES, { each: true })
  type: APARTMENT_TYPES;
}
