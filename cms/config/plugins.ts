// You can import the EmailConfig type from the plugin
import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";

export default () => ({
  email: {
    config: {
      provider: 'nodemailer',
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
      // providerOptions: {
      //   host: 'smtp.yandex.ru',
      //   port: 465,
      //   secure: true,
      //   auth: {
      //     user: 'sputnik@moov-travel.ru',
      //     pass: 'pyvTer-mighum-povde9',
      //   },
      //   tls: {
      //     rejectUnauthorized: false
      //   }
      // },
      // settings: {
      //   defaultFrom: 'sputnik@moov-travel.ru',
      //   defaultReplyTo: 'sputnik@moov-travel.ru',
      // }
      providerOptions: {
        host: 'connect.smtp.bz',
        port: 465,
        secure: true,
        auth: {
          user: 'mercurial-team@yandex.ru',
          pass: 'VJCIbY4Rtw1b',
        },
      },
      settings: {
        defaultFrom: 'sputnik@moov-travel.ru',
        defaultReplyTo: 'sputnik@moov-travel.ru',
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
          name: "Moove Travel",
          mergeTags: {
            name: {
              name: "Moove Travel",
              value: "Moove Travel",
              sample: "Moove Travel",
            },
          },
        },
      },
    } as EmailConfig,
  }
});
