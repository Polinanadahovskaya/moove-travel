"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/test/articles',
            handler: 'test.getArticles',
            config: {
                auth: false,
            },
        },
    ],
};
