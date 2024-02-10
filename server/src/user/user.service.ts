import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUser(dto: EditUser, email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    return { msg: 'userupdated' };
  }

  async getAllUsers() {
    return await this.prisma.user.findMany({
    
      select: {
        id: true,
    
        username: true,
        profilepic: true,
        posts:true
      },
      
    });
  }

  async getUserById(id: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          
          username: true,
          profilepic: true,
        },
      });
    } catch (error) {
      console.log(error)
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      } else {
        throw new Error('Something went wrong');
      }
     
    }
  }
}
