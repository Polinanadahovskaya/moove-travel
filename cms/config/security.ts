export default () => ({
  security: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "'unsafe-inline'", "editor.unlayer.com"],
        "frame-src": ["'self'", "editor.unlayer.com"],
        upgradeInsecureRequests: null,
      },
    },
  },
  cors: {
    enabled: true,
    origin: ['http://localhost:3000', 'http://localhost:1337'],
    credentials: true,
  },
  jwt: {
    expiresIn: '30d',
  },
}); 