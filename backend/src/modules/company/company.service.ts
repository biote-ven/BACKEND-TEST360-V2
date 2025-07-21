import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../core/firebase/firebase.service'; // Asume que tienes un servicio para Firebase
import { Company } from './interfaces/company.interface';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  private readonly companiesCollection = 'companies';
  private readonly usersCollection = 'users';

  constructor(private readonly firebaseService: FirebaseService) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const db = this.firebaseService.getFirestore();
    const batch = db.batch();

    // Crear usuario administrador
    const userRef = db.collection(this.usersCollection).doc();
    batch.set(userRef, {
      email: createCompanyDto.adminUser.email,
      name: createCompanyDto.adminUser.name,
      role: 'admin',
      companyId: null, // Se actualizará después
      createdAt: new Date(),
    });

    // Crear empresa
    const companyRef = db.collection(this.companiesCollection).doc();
    batch.set(companyRef, {
      name: createCompanyDto.name,
      address: createCompanyDto.address,
      taxId: createCompanyDto.taxId,
      adminUserId: userRef.id,
      createdAt: new Date(),
    });

    // Actualizar referencia de companyId en el usuario
    batch.update(userRef, { companyId: companyRef.id });

    await batch.commit();

    const companySnapshot = await companyRef.get();
    return {
      id: companyRef.id,
      ...companySnapshot.data(),
    } as Company;
  }

  async findAll(): Promise<Company[]> {
    const db = this.firebaseService.getFirestore();
    const snapshot = await db.collection(this.companiesCollection).get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Company[];
  }
}