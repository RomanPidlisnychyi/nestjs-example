import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { bcryptServices } from '../helpers/bcryptServices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserRequest): Promise<any> {
    const hash = await bcryptServices.hash(dto.password);

    return this.userRepository.save({ ...dto, password: hash });
  }

  async validateUser(dto: LoginUserRequest): Promise<any> {
    const { email } = dto;
    const user = await this.userRepository.findOne({ email });
    await bcryptServices.compare(dto.password, user.password);
    const { password, ...result } = user;
    return result;
  }

  async login(user: any): Promise<any> {
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
