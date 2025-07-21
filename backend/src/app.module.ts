import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { firebaseValidationSchema } from './core/firebase/serviceAccountKey';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [
      CompanyModule,
       ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: firebaseValidationSchema,
      envFilePath: '.env',
    }),
    // ...otros módulos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
