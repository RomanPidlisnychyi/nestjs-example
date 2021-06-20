import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRoles } from '../enums/user-roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    transformer: {
      from: (value: string) => value,
      to: (value: string) => value.toLowerCase(),
    },
    unique: true,
  })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;

  @Column('int', { array: true, nullable: true })
  stars: string[];
}
