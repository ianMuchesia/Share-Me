import { IsNotEmpty, IsString } from "class-validator";



export class CreatePostDTO {
    @IsNotEmpty()
    @IsString()
    prompt: string;

    @IsNotEmpty()
    @IsString()
    image:string;
}


export class UpdatePostDTO {
    @IsNotEmpty()
    @IsString()
    prompt: string;


    @IsNotEmpty()
    @IsString()
    image:string;
}


export class GenerateImageDTO {
    @IsNotEmpty()
    @IsString()
    prompt: string;
}


// export class GenereatePromptDTO {
//     @IsNotEmpty()
//     @IsString()
//     image: string;
// }