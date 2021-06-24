import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { bcryptServices } from '../helpers/bcryptServices';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserRequest): Promise<any> {
    const hash = await bcryptServices.hash(dto.password);

    return await this.userService.create({ ...dto, password: hash });
  }

  async validateUser(dto: LoginUserRequest): Promise<any> {
    const { email } = dto;
    const user = await this.userService.findUser(email);
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
