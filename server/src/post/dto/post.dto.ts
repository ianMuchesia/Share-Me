import { IsNotEmpty, IsString } from "class-validator";



export class CreatePostDTO {
    @IsNotEmpty()
    @IsString()
    prompt: string;

  
}




// export class GenereatePromptDTO {
//     @IsNotEmpty()
//     @IsString()
//     image: string;
// }