import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';
import { EditUser } from './dto';

@Controller('users')
export class UserController {
    constructor(private userService :UserService){}


    @Get("")
    getAllUsers()
    {
        return this.userService.getAllUsers()
    }

    @UseGuards(JwtGuard)
    @Get("me")
    getMe(@GetUser() user:User)
    {
        return {
            email:user.email,
            username:user.username,
            profilepic:user?.profilepic
        }
        
    }

    @UseGuards(JwtGuard)
    @Patch("update")
    updateUser(@Body() dto:EditUser, @GetUser() user:User)
    {
        return this.userService.updateUser(dto, user.email)
    }



    @Get(":id")
    getUserById(@Param('id') id: string)
    {
        return this.userService.getUserById(id)
    }
}
