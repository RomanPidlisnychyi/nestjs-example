import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { USER_ROLES } from '../enums/user-roles.enum';
import { IsEnum } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toLowerCase(),
    },
    unique: true,
  })
  email: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'enum', enum: USER_ROLES, default: USER_ROLES.USER })
  @IsEnum(USER_ROLES, { each: true })
  role: USER_ROLES;

  @Column('int', { array: true, nullable: true })
  stars: string[];
}
