# Базовый образ (лучше использовать alpine для меньшего размера)
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Сначала копируем только файлы зависимостей
COPY package.json package-lock.json ./

# 1. Чистим кеш npm (опционально)
# 2. Принудительно переустанавливаем все зависимости
# 3. Явно устанавливаем нужную архитектуру для oxc-parser (если требуется)
RUN npm cache clean --force && \
    npm install --force && \
    npm install @oxc-parser/binding-linux-x64-musl --force

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Отключаем проблемный парсер (на всякий случай)
ENV NUXT_OXC_PARSER_DISABLED=true
ENV NODE_ENV=production

# Открываем порт и запускаем
EXPOSE 3000
CMD ["npm", "run", "start"]