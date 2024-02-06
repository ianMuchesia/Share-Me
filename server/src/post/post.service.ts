import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from './dto';
import { ImageService } from 'src/image/image.service';
import { Exclude } from 'class-transformer';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private image: ImageService,
  ) {}

  async getAllPosts() {
    const posts = await this.prisma.post.findMany({
      include: {
        user: {
          select: {
            id: true, 
           username: true,
                   
           
          }
        }
      },
    });
  
    return posts;
  }

  async getPostById(postid: string) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: postid,
      },
      include: {
        user: {
          select: {
            id: true, 
           username: true,
                   
           
          }
        }
      },
    });

    if (!post) {
      throw new NotFoundException('post not found');
    }

    return post;
  }

  async getUserPosts(userid: string) {
    const posts = await this.prisma.post.findMany({
      where: {
        user_id: userid,
      },
      include: {
        user: {
          select: {
            id: true, 
           username: true,
                   
           
          }
        }
      },
    });

    return posts;
  }

  async createPost(dto: CreatePostDTO, userid: string) {
    try {
      const generatedImage = await this.image.generateImage(dto);

      const azureURL = await this.image.saveImageToAzure(
        generatedImage,
        dto.prompt,
      );

      const newPost = await this.prisma.post.create({
        data: {
          ...dto,
          user_id: userid,
          image: azureURL,
        },
      });

      return {
        id: newPost.id,
        createdAt: newPost.createdAt,
        updatedAt: newPost.updatedAt,
        prompt: newPost.prompt,
        image: newPost.image,
        voteCount: newPost.voteCount,

      };
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updatePost(postid: string, dto: CreatePostDTO, userid: string) {
    const post = await this.prisma.post.findFirst({
      where: {
        id: postid,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post not found`);
    }

    if (post.user_id !== userid) {
      throw new ForbiddenException(`Access to this resource is forbidden`);
    }

    const updatedPost = await this.prisma.post.update({
      where: {
        id: postid,
      },
      data: {
        ...dto,
      },
    });

    return updatedPost;
  }

  async deletePost(postid: string, userid: string) {
    const post = await this.prisma.post.findFirst({
      where: {
        id: postid,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post not found`);
    }

    if (post.user_id !== userid) {
      throw new ForbiddenException(`Access to this resource is forbidden`);
    }

    await this.prisma.post.delete({
      where: {
        id: postid,
      },
    });
  }

  async getOtherUserPosts(userid: string) {
    const posts = await this.prisma.post.findMany({
      where: {
        user_id: userid,
      },
      include: {
        user: {
          select: {
            id: true, 
           username: true,
                   
           
          }
        }
      },
    });

    return posts;
  }
  async generateImage(prompt: string) {
    const url = `https://via.placeholder.com/600/92c952`;
    return url;
  }

  async generatePrompt() {
    const url = `https://via.placeholder.com/600/92c952`;
    return url;
  }
}
