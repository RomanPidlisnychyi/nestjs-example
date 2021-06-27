import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserRequest, LoginUserRequest } from '../dto';
import { bcryptServices } from '../helpers/bcryptServices';
import { CreateUserResponse } from '../dto/responses/users/create-user.response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserRequest): Promise<CreateUserResponse> {
    const hash = await bcryptServices.hash(dto.password);

    await this.userService.create({ ...dto, password: hash });
    return { message: 'success' };
  }

  async validateUser(dto: LoginUserRequest): Promise<any> {
    const { email } = dto;
    const user = await this.userService.findUser({ email });
    if (!user) {
      throw new NotFoundException();
    }

    await bcryptServices.compare(dto.password, user.password);
    const { password, ...result } = user;
    return result;
  }

  async login(dto: LoginUserRequest): Promise<any> {
    const user = await this.validateUser(dto);
    const { id, role, stars, ...rest } = user;
    const payload = { id };
    return {
      ...rest,
      token: this.jwtService.sign(payload),
    };
  }
}
