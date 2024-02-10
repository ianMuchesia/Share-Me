import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { VoteModule } from './vote/vote.module';
import { ImageModule } from './image/image.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        PrismaModule,
        UserModule,
        PostModule,
        VoteModule,
        ImageModule,
        
    ]
})
export class AppModule implements OnModuleInit {
    constructor(private prismaService: PrismaService) {}
  
    async onModuleInit() {
      try {
        await this.prismaService.$connect().then(() => {
            console.log('Database connected');
          })
      } catch (error) {
        console.log(error)
        
      }
    }
  }
