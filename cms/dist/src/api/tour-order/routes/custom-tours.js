"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'POST',
            path: '/tour-orders/send',
            handler: 'tour-order.createAndSend',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
