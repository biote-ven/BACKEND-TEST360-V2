import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { FirebaseService } from '../../core/firebase/firebase.service'; 

@Module({
  controllers: [CompanyController],
  providers: [CompanyService,
    FirebaseService,],
})
export class CompanyModule {}