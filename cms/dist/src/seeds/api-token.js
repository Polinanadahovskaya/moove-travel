"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async ({ strapi }) => {
    try {
        // Проверяем, есть ли уже API токен
        const existingToken = await strapi.query('admin::api-token').findOne({
            where: { name: 'Frontend API Token' }
        });
        if (!existingToken) {
            // Создаем новый API токен
            const token = await strapi.query('admin::api-token').create({
                data: {
                    name: 'Frontend API Token',
                    description: 'Token for frontend access',
                    type: 'full-access',
                    accessKey: 'frontend-api-token-' + Math.random().toString(36).substr(2, 9),
                }
            });
            console.log('✅ Frontend API Token created:', token.accessKey);
            return token;
        }
        else {
            console.log('✅ Frontend API Token already exists:', existingToken.accessKey);
            return existingToken;
        }
    }
    catch (error) {
        console.error('❌ Error creating API token:', error);
    }
};
