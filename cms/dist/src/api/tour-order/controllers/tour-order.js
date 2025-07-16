"use strict";
/**
 * tour-order controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::tour-order.tour-order', ({ strapi }) => ({
    async createAndSend(ctx) {
        const { body } = ctx.request;
        // 1. Создаём запись
        const entry = await strapi.entityService.create('api::tour-order.tour-order', {
            data: body.data,
        });
        //return body.data
        // 2. Формируем html для письма
        const html = `
      <h1>Новая заявка</h1>
      <p><strong>Имя:</strong> ${body.data.name}</p>
      <p><strong>Телефон:</strong> ${body.data.phone}</p>
      <p><strong>Email:</strong> ${body.data.email}</p>
      <p><strong>Связь по телефону:</strong> ${body.data.byPhone ? 'Да' : 'Нет'}</p>
      <p><strong>Связь по email:</strong> ${body.data.byEmail ? 'Да' : 'Нет'}</p>
      <p><strong>Связь через WhatsApp:</strong> ${body.data.byWhatsUp ? 'Да' : 'Нет'}</p>
      <p><strong>Статус заказа:</strong> ${body.data.orderStatus}</p>
    `;
        // 3. Отправляем email
        await strapi.plugin('email').service('email').send({
            to: 'mercurial-team@yandex.ru',
            subject: 'Новая заявка с сайта',
            html,
        });
        // const stubTransport = strapi.plugins['email'].provider;
        // console.log(stubTransport.sentMail);
        return entry;
    },
}));
