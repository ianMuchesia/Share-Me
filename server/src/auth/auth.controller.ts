import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginDto } from './dto/auth.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseInterceptors(FileInterceptor('profilepic'))
  signup(@UploadedFile() file: Express.Multer.File, @Body() dto: AuthDto) {
    return this.authService.signup(dto, file);
  }

  @Post('login')
  signin(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }


}
