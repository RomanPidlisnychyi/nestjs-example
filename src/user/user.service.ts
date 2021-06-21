import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';
import { Cat } from '../entities/cat.entity';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { bcryptServices } from '../helpers/bcryptServices';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('CAT_REPOSITORY')
    private catRepository: Repository<Cat>,
  ) {}

  async create(dto: CreateUserRequest) {
    const hash = await bcryptServices.hash(dto.password);

    return this.userRepository.save({ ...dto, password: hash });
  }

  async login(dto: LoginUserRequest) {
    const { email, password } = dto;
    const user = await this.userRepository.findOne({ email });
    await bcryptServices.compare(password, user.password);
    // bcrypt.compare(dto.password);
    // return this.userRepository.save({ ...dto, password: hash });
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
  }

  async findAll() {
    return this.userRepository.find();
  }
}
