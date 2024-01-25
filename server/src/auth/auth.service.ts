import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, LoginDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const hashedPassword = await argon.hash(dto.password);


      

      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: hashedPassword,
         
        },
      });

      return this.createJWT(user);
    } catch (error) {
      if (
        error.code === 'P2002' &&
        error instanceof PrismaClientKnownRequestError
      ) {
        throw new BadRequestException('Email already exists');
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: dto.email,
        },
      });

      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

     
      const validPassword = await argon.verify(user.password, dto.password);

      if (!validPassword) {
        throw new BadRequestException('Invalid credentials');
      }

      return this.createJWT(user);
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }

  // async logout(){

  // }

  async createJWT(user: User) {
    try {
      const payload = {
        username: user.username,
        email: user.email,
        userId: user.id,
      };

      const secret = this.config.get<string>('JWT_SECRET');

      const token = await this.jwt.signAsync(payload, {
        expiresIn: this.config.get('JWT_LIFETIME'),
        secret,
      });

      return {
        access_token: token,
        email: user.email,
        username: user.username,
        profileImg: user.profilepic,
      };
    } catch (error) {
      throw error;
    }
  }
}
