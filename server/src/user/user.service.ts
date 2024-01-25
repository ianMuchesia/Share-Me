import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser } from './dto';


@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}

    async updateUser(dto:EditUser, email:string){
        const user = await this.prisma.user.findFirst({
            where:{
                email
            }
        })

        if (!user){
            throw new ForbiddenException("Access Denied")
        }

        return {msg:"userupdated"}
    }
}
