import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Adaptación para Vercel
  if (process.env.VERCEL) {
    await app.init(); // Inicializa sin levantar el servidor HTTP
    return app.getHttpAdapter().getInstance(); // Exporta para Vercel
  } else {
    // Modo desarrollo local
    await app.listen(process.env.PORT || 3000);
    console.log(`🚀 Servidor local en http://localhost:${process.env.PORT || 3000}`);
  }
}

// Export para Vercel
module.exports = bootstrap();

//bootstrap();
// Export para Vercel
//module.exports = bootstrap().then(app => app.getHttpAdapter().getInstance());
