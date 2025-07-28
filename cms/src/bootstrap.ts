export default async ({ strapi }) => {
  // Проверяем, есть ли уже API токен
  const existingToken = await strapi.query('admin::api-token').findOne({
    where: { name: 'Frontend API Token' }
  });

  if (!existingToken) {
    // Создаем новый API токен
    await strapi.query('admin::api-token').create({
      data: {
        name: 'Frontend API Token',
        description: 'Token for frontend access',
        type: 'full-access',
        accessKey: 'frontend-api-token-' + Math.random().toString(36).substr(2, 9),
      }
    });
    
    console.log('✅ Frontend API Token created successfully');
  } else {
    console.log('✅ Frontend API Token already exists');
  }
}; 