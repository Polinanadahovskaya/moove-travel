export default {
  routes: [
    {
      method: 'POST',
      path: '/tour-orders/send',
      handler: 'tour-order.createAndSend',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/tour-order/alfa-register',
      handler: 'tour-order.registerAlfaOrder',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/tour-order/alfa-status',
      handler: 'tour-order.getAlfaOrderStatus',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/tour-order/download-guide',
      handler: 'tour-order.downloadGuideFile',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 