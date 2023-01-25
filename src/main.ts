import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      // Permite validar los campos que estan en el dto correspondiente sin dejar pasar parametros no permitidos
      whitelist: true,
      forbidNonWhitelisted: true,
      // Transforma los que me viene en el query (string) al tipo de dato que espero en el dto correspondiente
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
