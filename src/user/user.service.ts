import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserRequest } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserRequest) {
    return this.userRepository.save(dto);
  }

  async findUser(query) {
    return this.userRepository.findOne(query);
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(userName: string) {
    const users = [
      {
        id: 1,
        name: 'Lucky',
        password: '1111',
      },
      {
        id: 2,
        name: 'Roma',
        password: '2222',
      },
    ];

    return users.find((user) => user.name === userName);
  }
}
