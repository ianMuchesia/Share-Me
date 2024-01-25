import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO, UpdatePostDTO } from './dto';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService){}

   

    async getAllPosts() {
        const posts = await this.prisma.post.findMany({
            include:{
                user: true,
            }
        })

        return posts;
    }

    async getPostById(postid: string) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: postid,
            },
            include: {
                user: true,
            }
        })

        if(!post){
            throw new NotFoundException("post not found")
        }

        return post;
    }

    async getUserPosts(userid: string) {
        const posts = await this.prisma.post.findMany({
            where: {
                user_id: userid,
            },
            include: {
                user: false,
            }
        })

        return posts;
    }

    async createPost(dto:CreatePostDTO, userid: string) {
        const post = await this.prisma.post.create({
            data: {
                ...dto,
                user: {
                    connect: {
                        id: userid,
                    }
                }
            }
        })

        return post;
    }

    async updatePost(postid: string, dto:UpdatePostDTO, userid: string) {

        const post = await this.prisma.post.findFirst({
            where: {
                id: postid,
             
            }
        })


        if (!post){
            throw new NotFoundException(`Post not found`);
        }

        if (post.user_id !== userid) {
            throw new ForbiddenException(`Access to this resource is forbidden`)
        }
        
        const updatedPost = await this.prisma.post.update({
            where: {
                id: postid,
            },
            data: {
              ...dto
            }
        })

        return updatedPost;

    }


    async deletePost(postid: string, userid: string) {

        const post = await this.prisma.post.findFirst({
            where: {
                id: postid,
             
            }
        })

        if (!post){
            throw new NotFoundException(`Post not found`);
        }

        if (post.user_id !== userid) {
           throw new ForbiddenException(`Access to this resource is forbidden`)
        }

        await this.prisma.post.delete({
            where: {
                id: postid,
            }
        })

        


    }

    async generateImage(prompt: string) {
        const url = `https://via.placeholder.com/600/92c952`
        return url;
    }

    async generatePrompt() {
        const url = `https://via.placeholder.com/600/92c952`
        return url;
    }


    


}
