"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // STARTTLS
                auth: {
                    user: 'marcella53@ethereal.email',
                    pass: 'vAnBHF3yAFsDkSckZd',
                },
                requireTLS: true,
            },
            settings: {
                defaultFrom: 'no-reply@moove-travel.ru',
                defaultReplyTo: 'no-reply@moove-travel.ru',
            },
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
        },
    }
});
