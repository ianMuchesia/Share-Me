import { BlobServiceClient } from '@azure/storage-blob';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ImageDTO } from './dto';

@Injectable()
export class ImageService {
  constructor(private config: ConfigService) {}
  private readonly apiUrl = this.config.get<string>('GET_IMG_API_URL');
  private readonly bearerToken = this.config.get<string>(
    'GET_IMG_BEARER_TOKEN',
  );
  private readonly azureStorageConnection = this.config.get<string>(
    'AZURE_STORAGE_CONNECTION_STRING',
  );
  private readonly containerName = this.config.get<string>(
    'AZURE_STORAGE_CONTAINER_NAME',
  );

  async generateImage(dto: ImageDTO): Promise<any> {
    const dataToSend = {
      // Your data here
      prompt: dto.prompt,
      width: 256,
      height: 256,
      steps: 50,
      output_format: 'png',
    };

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer key-${this.bearerToken}`,
      },
      body: JSON.stringify(dataToSend),
    };

    try {
      const response = await fetch(this.apiUrl, options);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('An error occurred while fetching the image:', error);
      throw error;
    }
  }
  async saveProfileImageToAzure(file: Express.Multer.File, username: string) {
    try {
      //upload the image to blob storage
      const blobName = `${username}.${file.mimetype.split('/')[1]}`;

      const bobServiceClient = BlobServiceClient.fromConnectionString(
        this.azureStorageConnection,
      );

      const containerClient = bobServiceClient.getContainerClient(
        this.containerName,
      );

      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype },
      });

      return blockBlobClient.url;
    } catch (error) {
      throw error;
    }
  }

  async saveImageToAzure(body: any, prompt: string) {
    try {
      const imageBuffer = Buffer.from(body.image, 'base64');

      //upload the image to blob storage
      const bobServiceClient = BlobServiceClient.fromConnectionString(
        this.azureStorageConnection,
      );

      const containerClient = bobServiceClient.getContainerClient(
        this.containerName,
      );

      let blobName = `${prompt}.png`;
      if (prompt.length > 12) {
        blobName = `${prompt.slice(12).trim()}.png`;
      }

      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      await blockBlobClient.upload(imageBuffer, imageBuffer.length);

      return blockBlobClient.url;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
