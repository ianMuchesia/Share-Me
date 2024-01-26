import { IsNotEmpty, IsString } from "class-validator";


export class ImageDTO{
    @IsNotEmpty()
    @IsString()
    prompt: string;
}



