"use strict";
/**
 * article controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::article.article', ({ strapi }) => ({
    // Переопределяем метод find для публичного доступа
    async find(ctx) {
        // Убираем проверку авторизации
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
    // Переопределяем метод findOne для публичного доступа
    async findOne(ctx) {
        // Убираем проверку авторизации
        const { data, meta } = await super.findOne(ctx);
        return { data, meta };
    },
}));
