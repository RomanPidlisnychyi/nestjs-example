import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRoles } from '../enums/user-roles.enum';
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

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  @IsEnum({ each: true })
  role: UserRoles;

  @Column('int', { array: true, nullable: true })
  stars: string[];
}
