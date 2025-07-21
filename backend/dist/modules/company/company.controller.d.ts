import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './interfaces/company.interface';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(): Promise<Company[]>;
}
