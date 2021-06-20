import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Cat } from '../entities/cat.entity';
import { CreateUserRequest } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('CAT_REPOSITORY')
    private catRepository: Repository<Cat>,
  ) {}

  create(user: CreateUserRequest) {
    return this.userRepository.save(user);
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
  }

  async findAll() {
    console.log(await this.catRepository.find());
    return this.userRepository.find();
  }
}
