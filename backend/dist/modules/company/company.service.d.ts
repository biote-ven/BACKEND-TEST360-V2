import { FirebaseService } from '../../core/firebase/firebase.service';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyService {
    private readonly firebaseService;
    private readonly companiesCollection;
    private readonly usersCollection;
    constructor(firebaseService: FirebaseService);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(): Promise<Company[]>;
}
