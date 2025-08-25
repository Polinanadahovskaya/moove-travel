"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    // Политики для публичного доступа к API
    'api::article.article': {
        find: true,
        findOne: true,
    },
    'api::country.country': {
        find: true,
        findOne: true,
    },
    'api::main-page.main-page': {
        find: true,
        findOne: true,
    },
    'api::about-us-page.about-us-page': {
        find: true,
        findOne: true,
    },
    'api::blog.blog': {
        find: true,
        findOne: true,
    },
    'api::guide-page.guide-page': {
        find: true,
        findOne: true,
    },
    'api::travel-guide.travel-guide': {
        find: true,
        findOne: true,
    },
    'api::article-tag.article-tag': {
        find: true,
        findOne: true,
    },
    'api::user.user': {
        find: true,
        findOne: true,
    },
    'api::tour-order.tour-order': {
        create: true,
        find: true,
        findOne: true,
    },
    'api::guide-order.guide-order': {
        create: true,
        find: true,
        findOne: true,
    },
});
