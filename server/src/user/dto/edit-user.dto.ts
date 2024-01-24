import { IsNotEmpty, IsString } from "class-validator";



export class EditUser{
    @IsString()
    @IsNotEmpty()
    profilepic:string;

}