import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { VoteService } from './vote.service';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';

@Controller('votes')
export class VoteController {
  constructor(private voteService: VoteService) {}

  @UseGuards(JwtGuard)
  @Post(':id')
  async createVote(@GetUser() user: User, @Param('id') postId: string) {
    return this.voteService.createVote(user.id, postId);
  }
  
  @UseGuards(JwtGuard)
  @Delete(':id')
  async undoVote(@GetUser() user: User, @Param('id') postId: string) {
    return this.voteService.undoVote(user.id, postId);
  }
}
