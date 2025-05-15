import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DataSource } from 'typeorm';
import { ValidationPipe } from '@nestjs/common';
import { seedTypes } from './type/type.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.MODE == 'dev' ? app.enableCors() : null;

  const dataSource = app.get(DataSource);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await seedTypes(dataSource);

  const config = new DocumentBuilder()
    .setTitle('Emolod Nest')
    .setDescription('First nest project')
    .setVersion('1.0')
    .addTag('nest-project')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3003);
}

bootstrap();
