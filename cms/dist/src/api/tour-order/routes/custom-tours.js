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
        {
            method: 'POST',
            path: '/tour-order/alfa-register',
            handler: 'tour-order.registerAlfaOrder',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/tour-order/alfa-status',
            handler: 'tour-order.getAlfaOrderStatus',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
