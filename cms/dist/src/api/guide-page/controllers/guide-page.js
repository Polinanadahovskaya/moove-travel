"use strict";
/**
 * guide-page controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::guide-page.guide-page', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
                bestGuides: {
                    populate: {
                        travel_guide: {
                            populate: ['images', 'countryPageImages', 'guidePageImages', 'country']
                        }
                    }
                },
                // можно добавить другие поля, если нужно
            },
        };
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
}));
