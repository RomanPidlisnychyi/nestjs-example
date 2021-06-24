import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { bcryptServices } from '../helpers/bcryptServices';
import { CatsService } from '../cats/cats.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private catsService: CatsService,
  ) {}

  async create(dto: CreateUserRequest) {
    // const hash = await bcryptServices.hash(dto.password);

    return this.userRepository.save(dto);
  }

  async login(dto: LoginUserRequest) {
    const { email, password } = dto;
    const user = await this.userRepository.findOne({ email });
    await bcryptServices.compare(password, user.password);
    // bcrypt.compare(dto.password);
    // return this.userRepository.save({ ...dto, password: hash });
  }

  async findUser(query) {
    return this.userRepository.findOne({
      where: query,
    });
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.remove(user);
  }

  async findAll() {
    return this.userRepository.find();
  }
}
