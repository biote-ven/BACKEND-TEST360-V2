import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
export declare class FirebaseService {
    private configService;
    private app;
    constructor(configService: ConfigService);
    getFirestore(): admin.firestore.Firestore;
}
