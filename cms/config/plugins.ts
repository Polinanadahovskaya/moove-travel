export default () => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // STARTTLS
        auth: {
          user: 'jerad.cronin@ethereal.email',
          pass: '22HAXk4GZZ2fGSzb9f',
        },
        requireTLS: true,
      },
      settings: {
        defaultFrom: 'no-reply@moove-travel.ru',
        defaultReplyTo: 'no-reply@moove-travel.ru',
      },
    },
  },
});
