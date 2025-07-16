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
                    user: 'jadyn.walsh@ethereal.email',
                    pass: 'NeJujUnFcqGcUmCv31',
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
