const axios = require('axios');

async function createApiToken() {
  try {
    // Сначала нужно получить JWT токен админа
    const adminResponse = await axios.post('http://localhost:1337/admin/login', {
      email: 'admin@strapi.io',
      password: 'strapi123'
    });

    const adminToken = adminResponse.data.data.token;

    // Создаем API токен
    const tokenResponse = await axios.post('http://localhost:1337/admin/api-tokens', {
      name: 'Frontend API Token',
      description: 'Token for frontend access',
      type: 'full-access'
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ API Token created:', tokenResponse.data.data.accessKey);
    return tokenResponse.data.data.accessKey;
  } catch (error) {
    console.error('❌ Error creating API token:', error.response?.data || error.message);
  }
}

createApiToken(); 