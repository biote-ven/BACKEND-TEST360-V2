import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

   // Exportación para Vercel
  if (process.env.VERCEL) {
    return app.getHttpAdapter().getInstance();
  } else {
    await app.listen(3000);
  }
}

// Export para Vercel
module.exports = bootstrap();

//bootstrap();
// Export para Vercel
//module.exports = bootstrap().then(app => app.getHttpAdapter().getInstance());
