import { IsNotEmpty, IsString } from "class-validator";



export class CreatePostDTO {
    @IsNotEmpty()
    @IsString()
    prompt: string;

    @IsNotEmpty()
    @IsString()
    image:string;
}




// export class GenereatePromptDTO {
//     @IsNotEmpty()
//     @IsString()
//     image: string;
// }