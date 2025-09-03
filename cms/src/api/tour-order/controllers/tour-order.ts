/**
 * tour-order controller
 */

import { factories } from '@strapi/strapi';
import axios from 'axios';
const path = require('path');

export default factories.createCoreController('api::tour-order.tour-order', ({ strapi }) => ({
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
      to: 'sputnik@moov-travel.ru',
      subject: 'Новая заявка с сайта',
      html,
    });

    // const stubTransport = strapi.plugins['email'].provider;
    // console.log(stubTransport.sentMail);

    return entry;
  },

  async registerAlfaOrder(ctx) {
    try {
      const { amount, returnUrl, description, name, phone, email, travel_guide } = ctx.request.body as {
        amount: number;
        returnUrl: string;
        description: string;
        name?: string;
        phone?: string;
        email?: string;
        travel_guide?: number;
      };
      // 1. Создаём запись в guide-orders
      const guideOrderData: any = {
        name,
        phone,
        email,
        amount: amount/100,
        payment_status: 'in_progress',
        emailSend: false,
        travel_guide: { documentId: travel_guide },
      };
      //if (travel_guide) guideOrderData.travel_guide = { id: travel_guide };
      const guideOrder = await strapi.entityService.create('api::guide-order.guide-order', { data: guideOrderData });
      console.log('guideOrder:', guideOrder)
      // 2. Используем id как orderNumber
      const orderNumber = Number(guideOrder.id) - 1;
      const params = {
        userName: 'r-id65022_u_on-api',
        password: 'r-id65022_u_on*?1',
        amount,
        orderNumber,
        returnUrl,
        description,
      };
      console.log('alfa params:', params);
      const response = await axios.post('https://alfa.rbsuat.com/payment/rest/register.do', null, { params });
      ctx.send(response.data);
    } catch (e: any) {
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
        password: 'dd69kWSrktsSdkY#',
        orderId,
      };
      const response = await axios.get('https://alfa.rbsuat.com/payment/rest/getOrderStatusExtended.do', { params });
      let result = response.data;
      // Если оплата успешна, обновляем guide-order

      if (result.orderNumber) {
        const orderNumber = result.orderNumber;
        console.log('orderNumber:', orderNumber)
        // Пытаемся найти guide-order по id (orderNumber)
        const guideOrder: any = await strapi.entityService.findOne('api::guide-order.guide-order', orderNumber, { populate: ['travel_guide'] });
        console.log('guideOrder:', guideOrder)
        if (guideOrder) {
          if (guideOrder.emailSend === true) {
            console.log('Email уже был отправлен, повторная отправка не требуется.');
            ctx.send(result);
            return;
          }
          if (result.orderStatus === 2) {
            await strapi.entityService.update('api::guide-order.guide-order', orderNumber, {
              data: { payment_status: 'paid' },
            });
            console.log('paid update:')
            // Отправляем файл гида на email пользователя
            if (guideOrder.travel_guide && guideOrder.travel_guide.id) {
              // Получаем travel_guide с файлом guide
              const travelGuide: any = await strapi.entityService.findOne('api::travel-guide.travel-guide', guideOrder.travel_guide.id, { populate: ['guide'] });
              console.log('travelGuide:', travelGuide)
              let guideFile = travelGuide.guide;
              if (Array.isArray(guideFile)) {
                guideFile = guideFile[0];
              }
              console.log('guideFile:', guideFile);
              if (!guideFile || !guideFile.url) {
                throw new Error('Файл guide не найден или не содержит url');
              }
              const fileUrl = guideFile.url.startsWith('http')
                ? guideFile.url
                : `${strapi.config.get('server.url', 'http://localhost:1337')}${guideFile.url}`;
              console.log('fileUrl:', fileUrl);
              const fileName = guideFile.description || guideFile.name || require('path').basename(guideFile.url);
              console.log('fileName:', fileName);
              // Скачиваем файл как буфер
              const fileResponse = await axios.get(fileUrl, { responseType: 'arraybuffer' });
              const fileBuffer = fileResponse.data;
              console.log('fileBuffer:');
              // Отправляем email с вложением
              // await strapi.plugin('email').service('email').send({
              //   to: guideOrder.email,
              //   subject: 'Ваш гид',
              //   text: `Спасибо что выбрали нас! Ваш гид во вложении.`,
              //   html: `<p>Спасибо что выбрали нас! Ваш гид во вложении.</p>`,
              //   attachments: [
              //     {
              //       filename: fileName,
              //       content: fileBuffer,
              //     },
              //   ],
              // });
              try {
                await strapi
                    .plugin("email-designer-5")
                    .service("email")
                    .sendTemplatedEmail(
                        {
                          // required
                          // This can also be an array of email addresses
                          to: guideOrder.email,
                          // Optional
                          //cc: ["zez@jakce.ad", "ilez@gevcanuso.la"],
                          // Optional
                          //bcc: ["fud@darfuv.py"],
                          // optional if /config/plugins.js -> email.settings.defaultFrom is set
                          //from: "from@example.com",
                          // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
                          //replyTo: "reply@example.com",
                          // optional array of files
                          attachments: [
                                {
                                  filename: fileName,
                                  content: fileBuffer,
                                },
                          ],
                        },
                        {
                          // required - Ref ID defined in the template designer (won't change on import)
                          templateReferenceId: 20,
                          // If provided here will override the template's subject.
                          // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                          //subject: `Thank you for your order`,
                        },
                        {
                          // this object must include all variables you're using in your email template
                          // USER: { firstName: "John", lastName: "Doe" },
                          // order: {
                          //   products: [
                          //     { name: "Article 1", price: 9.99 },
                          //     { name: "Article 2", price: 5.55 },
                          //   ],
                          // },
                          // shippingCost: 5,
                          // total: 20.54,
                        }
                    );
                strapi.log.info("Email sent");
              } catch (error) {
                strapi.log.error(error);
              }
              console.log('email sent:');
              // После успешной отправки письма обновляем emailSend
              await strapi.entityService.update('api::guide-order.guide-order', orderNumber, {
                data: { emailSend: true },
              });
              console.log('update email done:');
            }
          } else {
            await strapi.entityService.update('api::guide-order.guide-order', orderNumber, {
              data: { payment_status: 'payment_failed' },
            });
          }
        }
      }
      ctx.send(result);
    } catch (e: any) {
      ctx.status = 500;
      ctx.send({ error: 'Ошибка при получении статуса заказа', details: e.message });
    }
  },

  async downloadGuideFile(ctx) {
    try {
      const { orderId } = ctx.request.query;
      if (!orderId) {
        ctx.status = 400;
        ctx.send({ error: 'orderId is required' });
        return;
      }
      // Находим заказ с вложенным гидом и файлом guide
      const guideOrder = await strapi.entityService.findOne(
        'api::guide-order.guide-order',
        Number(orderId),
        { populate: { travel_guide: { populate: ['guide'] } } }
      ) as any;
      if (!guideOrder) {
        ctx.status = 404;
        ctx.send({ error: 'Заказ не найден' });
        return;
      }
      if (guideOrder.payment_status !== 'paid' || guideOrder.emailSend !== true) {
        ctx.status = 403;
        ctx.send({ error: 'Файл доступен только после успешной оплаты' });
        return;
      }
      if (!guideOrder.travel_guide || !guideOrder.travel_guide.guide) {
        ctx.status = 404;
        ctx.send({ error: 'Гид или файл гида не найден' });
        return;
      }
      let guideFile = guideOrder.travel_guide.guide;
      if (Array.isArray(guideFile)) {
        guideFile = guideFile[0];
      }
      if (!guideFile || !guideFile.url) {
        ctx.status = 404;
        ctx.send({ error: 'Файл гида не найден' });
        return;
      }
      const fileUrl = guideFile.url.startsWith('http')
        ? guideFile.url
        : `${strapi.config.get('server.url', 'http://localhost:1337')}${guideFile.url}`;
      const fileName = guideFile.description || guideFile.name || require('path').basename(guideFile.url);
      console.log('guideFile: ', guideFile)
      console.log('fileUrl: ', fileUrl)
      console.log('fileName: ', fileName)
      // Скачиваем файл как буфер
      const fileResponse = await require('axios').get(fileUrl, { responseType: 'arraybuffer' });
      ctx.set('Content-disposition', `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`);
      ctx.set('Content-type', guideFile.mime || 'application/octet-stream');
      ctx.set('X-File-Name', encodeURIComponent(fileName));
      ctx.body = fileResponse.data;
    } catch (e) {
      ctx.status = 500;
      ctx.send({ error: 'Ошибка при скачивании файла', details: e.message });
    }
  },
}));
