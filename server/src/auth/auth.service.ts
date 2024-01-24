import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, LoginDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      return dto.username;
    } catch (error) {}
  }

  async login(dto: LoginDto) {
    try {
      return dto.email;
    } catch (error) {}
  }
}
