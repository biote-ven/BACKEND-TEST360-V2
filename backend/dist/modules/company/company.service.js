"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("../../core/firebase/firebase.service");
let CompanyService = class CompanyService {
    firebaseService;
    companiesCollection = 'companies';
    usersCollection = 'users';
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async create(createCompanyDto) {
        const db = this.firebaseService.getFirestore();
        const batch = db.batch();
        const userRef = db.collection(this.usersCollection).doc();
        batch.set(userRef, {
            email: createCompanyDto.adminUser.email,
            name: createCompanyDto.adminUser.name,
            role: 'admin',
            companyId: null,
            createdAt: new Date(),
        });
        const companyRef = db.collection(this.companiesCollection).doc();
        batch.set(companyRef, {
            name: createCompanyDto.name,
            address: createCompanyDto.address,
            taxId: createCompanyDto.taxId,
            adminUserId: userRef.id,
            createdAt: new Date(),
        });
        batch.update(userRef, { companyId: companyRef.id });
        await batch.commit();
        const companySnapshot = await companyRef.get();
        return {
            id: companyRef.id,
            ...companySnapshot.data(),
        };
    }
    async findAll() {
        const db = this.firebaseService.getFirestore();
        const snapshot = await db.collection(this.companiesCollection).get();
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], CompanyService);
//# sourceMappingURL=company.service.js.map