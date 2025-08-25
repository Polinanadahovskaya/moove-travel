"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    return async (ctx, next) => {
        // Список публичных эндпоинтов
        const publicEndpoints = [
            '/api/articles',
            '/api/countries',
            '/api/main-page',
            '/api/about-us-page',
            '/api/blog',
            '/api/guide-page',
            '/api/travel-guides',
            '/api/article-tags',
            '/api/users'
        ];
        // Проверяем, является ли текущий эндпоинт публичным
        const isPublicEndpoint = publicEndpoints.some(endpoint => ctx.url.startsWith(endpoint));
        if (isPublicEndpoint) {
            // Для публичных эндпоинтов пропускаем проверку авторизации
            return next();
        }
        // Для остальных эндпоинтов продолжаем стандартную обработку
        return next();
    };
};
