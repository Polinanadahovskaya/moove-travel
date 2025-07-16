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
  ],
}; 