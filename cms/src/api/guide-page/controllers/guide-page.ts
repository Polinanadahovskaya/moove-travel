/**
 * guide-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::guide-page.guide-page', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        bestGuides: {
          populate: {
            travel_guide: {
              populate: ['images', 'country', 'guide']
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
