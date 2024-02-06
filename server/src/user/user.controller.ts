import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';
import { EditUser } from './dto';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {
    constructor(private userService :UserService){}

    @Get("me")
    getMe(@GetUser() user:User)
    {
        return {
            email:user.email,
            username:user.username,
            profileImg:user?.profilepic
        }
        
    }

    @UseGuards(JwtGuard)
    @Patch("update")
    updateUser(@Body() dto:EditUser, @GetUser() user:User)
    {
        return this.userService.updateUser(dto, user.email)
    }
}
