import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async createVote(userId: string, postId: string) {
    try {
      const alreadyVoted = await this.prisma.vote.findFirst({
        where: {
          user_id: userId,
          post_id: postId,
        },
      });
  
      if (alreadyVoted) {
        await this.prisma.$transaction([
          this.prisma.vote.delete({
            where: {
              id: alreadyVoted.id,
            },
          }),
          this.prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              voteCount: {
                decrement: 1,
              },
            },
          }),
        ]);
  
        return -1;
      } else {
        // Create the vote and increment the vote count in a single transaction
        await this.prisma.$transaction([
          this.prisma.vote.create({
            data: {
              user: {
                connect: {
                  id: userId,
                },
              },
              post: {
                connect: {
                  id: postId,
                },
              },
            },
          }),
          this.prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              voteCount: {
                increment: 1,
              },
            },
          }),
        ]);
  
        // Return the created vote
        return +1;
      }
    } catch (error) {
      if (error.code === 'P2025') {
        throw new BadRequestException('Post not found');
      }else{
        throw new Error('Internal Server Error');
      }

      
    }
  }

  async undoVote(userId: string, postId: string) {
    const vote = await this.prisma.vote.findFirst({
      where: {
        user_id: userId,
        post_id: postId,
      },
    });

    if (!vote) {
      throw new NotFoundException('Vote not found');
    }

    // Delete the vote and decrement the vote count in a single transaction
    const result = await this.prisma.$transaction([
      this.prisma.vote.delete({
        where: {
          id: vote.id,
        },
      }),
      this.prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          voteCount: {
            decrement: 1,
          },
        },
      }),
    ]);

    // Return the deleted vote
    return result[0];
  }
}
