import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';
import { CreatePostDTO, GenerateImageDTO } from './dto';

@Controller('posts')
export class PostController {
  constructor(private postservice: PostService) {}

  @Get('')
  getAllPosts() {
    return this.postservice.getAllPosts();
  }

  @UseGuards(JwtGuard)
  @Get('user')
  getUserPosts(@GetUser() user: User) {
    return this.postservice.getUserPosts(user.id);
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postservice.getPostById(id);
  }

  @UseGuards(JwtGuard)
  @Post('')
  createPost(@GetUser() user: User, @Body() dto: CreatePostDTO) {
    return this.postservice.createPost(dto, user.id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body() dto: CreatePostDTO,
    @GetUser() user: User,
  ) {
    return this.postservice.updatePost(id, dto, user.id);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string, @GetUser() user: User) {
    return this.postservice.deletePost(id, user.id);
  }

  @UseGuards(JwtGuard)
  @Post('generate')
  generateImage(@Body() dto: GenerateImageDTO) {
    return this.postservice.generateImage(dto.prompt);
  }

  @UseGuards(JwtGuard)
  @Post('generateprompt')
  generatePrompt() {
    return this.postservice.generatePrompt();
  }
}
