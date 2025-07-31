// You can import the EmailConfig type from the plugin
import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";

export default () => ({
  email: {
    config: {
      // provider: 'nodemailer',
      // providerOptions: {
      //   host: 'smtp.ethereal.email',
      //   port: 587,
      //   secure: false, // STARTTLS
      //   auth: {
      //     user: 'marcella53@ethereal.email',
      //     pass: 'vAnBHF3yAFsDkSckZd',
      //   },
      //   requireTLS: true,
      // },
      providerOptions: {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true, // SSL
        auth: {
          user: 'sputnik@moov-travel.ru',
          pass: 'dknebriiydcnyqzo',
        },
        tls: {
          // Необходимо для работы с Яндекс.Почтой
          rejectUnauthorized: false
        }
      },
      settings: {
        defaultFrom: 'no-reply@moov-travel.ru',
        defaultReplyTo: 'no-reply@moov-travel.ru',
      }
    },
  },
  // This is the configuration for the Email Designer plugin
  "email-designer-5": {
    enabled: true,
    // Your custom configuration here
    config: {
      // Here the Merge Tags defined will be merged with the defaults above
      mergeTags: {
        company: {
          name: "Company",
          mergeTags: {
            name: {
              name: "Company Name",
              value: "ACME Corp",
              sample: "ACME Corp",
            },
          },
        },
      },
    } as EmailConfig,
  }
});
