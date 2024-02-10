import { IsNotEmpty, IsString } from "class-validator";



export class EditUser{
    @IsString()
    @IsNotEmpty()
    profilepic:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty()
    email:string;

  


}