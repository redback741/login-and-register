import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() user: LoginDto) {
    const foundUser = await this.userService.login(user)

    if(foundUser) {
      return '登录成功'
    } else {
      return 'login fail'
    }
  }

  @Post('register')
  async register(@Body() user: RegisterDto) {
    return await this.userService.register(user)
  }

}
