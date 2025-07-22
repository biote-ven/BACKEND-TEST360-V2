import * as Joi from 'joi';
export interface FirebaseConfig {
    projectId: string;
    clientEmail: string;
    privateKey: string;
}
declare const _default: (() => FirebaseConfig) & import("@nestjs/config").ConfigFactoryKeyHost<FirebaseConfig>;
export default _default;
export declare const firebaseValidationSchema: Joi.ObjectSchema<any>;
