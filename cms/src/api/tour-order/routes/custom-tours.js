module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/tour-order/alfa-register',
      handler: 'tour-order.registerAlfaOrder',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // ... другие роуты ...
  ],
}; 