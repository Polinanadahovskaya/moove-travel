"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async getArticles(ctx) {
        try {
            const articles = await strapi.entityService.findMany('api::article.article', {
                populate: ['article_tags', 'country', 'articlePhotos', 'user'],
            });
            return { data: articles };
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
};
