import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
 
    whitelist: true,
  }));
  app.enableCors({origin:"*"})
  app.setGlobalPrefix('/api/v1');
  const port = process.env.PORT || 4000;

  await app.listen(port);
}
bootstrap();
