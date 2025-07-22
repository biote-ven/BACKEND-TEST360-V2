import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface FirebaseConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

export default registerAs('firebase', (): FirebaseConfig => ({
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
}));

export const firebaseValidationSchema = Joi.object({
  FIREBASE_PROJECT_ID: Joi.string().required(),
  FIREBASE_CLIENT_EMAIL: Joi.string().email().required(),
  FIREBASE_PRIVATE_KEY: Joi.string().required().regex(/^-----BEGIN PRIVATE KEY-----/),
});