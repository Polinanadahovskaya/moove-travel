/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
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