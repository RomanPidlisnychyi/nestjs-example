import { Injectable, Req } from '@nestjs/common';
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
    const user = await this.userService.findUser({ email });
    await bcryptServices.compare(dto.password, user.password);
    const { password, ...result } = user;
    return result;
  }

  async login(user: any): Promise<any> {
    const { id, role, stars, ...rest } = user;
    const payload = { id };
    return {
      ...rest,
      token: this.jwtService.sign(payload),
    };
  }

  async getUser(authorization) {
    // const token = authorization.split(' ')[1];
    // // console.log('token', token);
    //
    // let isTokenValid;
    //
    // try {
    //   isTokenValid = await this.jwtService.verify(token, {
    //     secret: process.env.JWT_SECRET,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log('isTokenValid', isTokenValid);
    // const resuslt = await this.jwtService.verifyAsync();
  }
}
