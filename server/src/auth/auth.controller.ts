import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signup(@Body() dto: AuthDto) {
  

   
   return this.authService.signup(dto)
  }

  @Post('login')
  signin(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
