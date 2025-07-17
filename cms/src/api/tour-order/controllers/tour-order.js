const axios = require('axios');

module.exports = {
  async registerAlfaOrder(ctx) {
    try {
      const { amount, orderNumber, returnUrl, description } = ctx.request.body;
      const params = {
        userName: 'r-id65022_u_on-api',
        password: 'r-id65022_u_on*?1',
        amount,
        orderNumber,
        returnUrl,
        description,
      };
      const response = await axios.post('https://alfa.rbsuat.com/payment/rest/register.do', null, { params });
      ctx.send(response.data);
    } catch (e) {
      ctx.status = 500;
      ctx.send({ error: 'Ошибка при обращении к Альфа-Банку', details: e.message });
    }
  },
} 