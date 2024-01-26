import { Body, Controller, Post } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageDTO } from './dto/image.dto';

@Controller('image')
export class ImageController {
    constructor(private imageService:ImageService){}

    @Post('generate')
    generateImage(@Body() body:ImageDTO)
    {
        return this.imageService.generateImage(body)
    }

    // @Post('save')
    // saveImageToAzure(@Body() body: any)
    // {
    //     return this.imageService.saveImageToAzure(body)
    // }
}
