"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseValidationSchema = void 0;
const config_1 = require("@nestjs/config");
const Joi = require("joi");
exports.default = (0, config_1.registerAs)('firebase', () => ({
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
}));
exports.firebaseValidationSchema = Joi.object({
    FIREBASE_PROJECT_ID: Joi.string().required(),
    FIREBASE_CLIENT_EMAIL: Joi.string().email().required(),
    FIREBASE_PRIVATE_KEY: Joi.string().required().regex(/^-----BEGIN PRIVATE KEY-----/),
});
//# sourceMappingURL=serviceAccountKey.js.map