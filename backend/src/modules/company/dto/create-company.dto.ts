export class CreateCompanyDto {
  name: string;
  address: string;
  taxId: string;
  adminUser: {
    email: string;
    name: string;
    // Otros campos del usuario admin
  };
}