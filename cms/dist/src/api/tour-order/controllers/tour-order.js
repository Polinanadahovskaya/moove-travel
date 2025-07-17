"use strict";
/**
 * tour-order controller
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const axios_1 = __importDefault(require("axios"));
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
    async registerAlfaOrder(ctx) {
        try {
            const { amount, returnUrl, description, name, phone, email, travel_guide } = ctx.request.body;
            // 1. Создаём запись в guide-orders
            const guideOrderData = {
                name,
                phone,
                email,
                amount: amount / 100,
                payment_status: 'in_progress',
                emailSend: false,
                travel_guide: { documentId: travel_guide },
            };
            //if (travel_guide) guideOrderData.travel_guide = { id: travel_guide };
            const guideOrder = await strapi.entityService.create('api::guide-order.guide-order', { data: guideOrderData });
            // 2. Используем id как orderNumber
            const orderNumber = guideOrder.id.toString();
            const params = {
                userName: 'r-id65022_u_on-api',
                password: 'r-id65022_u_on*?1',
                amount,
                orderNumber,
                returnUrl,
                description,
            };
            const response = await axios_1.default.post('https://alfa.rbsuat.com/payment/rest/register.do', null, { params });
            ctx.send(response.data);
        }
        catch (e) {
            ctx.status = 500;
            ctx.send({ error: 'Ошибка при обращении к Альфа-Банку', details: e.message });
        }
    },
    async getAlfaOrderStatus(ctx) {
        try {
            const { orderId } = ctx.request.query;
            if (!orderId) {
                ctx.status = 400;
                ctx.send({ error: 'orderId is required' });
                return;
            }
            const params = {
                userName: 'r-id65022_u_on-api',
                password: 'r-id65022_u_on*?1',
                orderId,
            };
            const response = await axios_1.default.get('https://alfa.rbsuat.com/payment/rest/getOrderStatusExtended.do', { params });
            const result = response.data;
            // Если оплата успешна, обновляем guide-order
            if (result.orderNumber) {
                const orderNumber = result.orderNumber;
                // Пытаемся найти guide-order по id (orderNumber)
                const guideOrder = await strapi.entityService.findOne('api::guide-order.guide-order', orderNumber);
                if (guideOrder) {
                    if (result.orderStatus === 2) {
                        await strapi.entityService.update('api::guide-order.guide-order', orderNumber, {
                            data: { payment_status: 'paid', emailSend: true },
                        });
                    }
                    else {
                        await strapi.entityService.update('api::guide-order.guide-order', orderNumber, {
                            data: { payment_status: 'payment_failed' },
                        });
                    }
                }
            }
            ctx.send(result);
        }
        catch (e) {
            ctx.status = 500;
            ctx.send({ error: 'Ошибка при получении статуса заказа', details: e.message });
        }
    },
}));
