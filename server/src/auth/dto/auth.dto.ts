import { IsNotEmpty, IsOptional, IsString } from "class-validator";



export class AuthDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
   password: string;

   @IsString()
   @IsString()
   email: string;

   @IsString()
   @IsOptional()
   profilepic?:string;
}