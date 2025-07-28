export default {
  routes: [
    {
      method: 'GET',
      path: '/test/articles',
      handler: 'test.getArticles',
      config: {
        auth: false,
      },
    },
  ],
}; 