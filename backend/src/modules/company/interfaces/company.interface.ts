export interface Company {
  id?: string; // Firebase generará el ID
  name: string;
  address: string;
  adminUserId: string; // Referencia al usuario administrador
}