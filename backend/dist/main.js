"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
    if (process.env.VERCEL) {
        return app.getHttpAdapter().getInstance();
    }
    else {
        await app.listen(3000);
    }
}
module.exports = bootstrap();
//# sourceMappingURL=main.js.map