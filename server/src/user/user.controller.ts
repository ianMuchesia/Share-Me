import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {

    @Get("me")
    getMe(@GetUser() user:User)
    {
        return user
    }
}
