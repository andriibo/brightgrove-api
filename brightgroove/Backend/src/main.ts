import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AppDataSource } from '../db/db';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  await AppDataSource.initialize();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('Users API')
  .setDescription('')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();