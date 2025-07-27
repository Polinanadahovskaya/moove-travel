# Используем официальный Node.js образ
FROM node:22-alpine

# Устанавливаем необходимые зависимости для сборки
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Устанавливаем рабочую директорию
WORKDIR /opt/

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем node-gyp глобально
RUN npm install -g node-gyp

# Устанавливаем зависимости
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Устанавливаем PATH для node_modules
ENV PATH=/opt/node_modules/.bin:$PATH

# Устанавливаем рабочую директорию для приложения
WORKDIR /opt/app

# Копируем остальные файлы проекта
COPY . .

# Меняем владельца файлов на пользователя node
RUN chown -R node:node /opt/app

# Переключаемся на пользователя node
USER node

# Собираем Strapi
RUN npm run build

# Открываем порт (по умолчанию 1337)
EXPOSE 1337

# Для хранения загруженных файлов и базы данных
VOLUME ["/opt/app/public/uploads", "/opt/app/.tmp"]

# Запускаем Strapi в production режиме
CMD ["npm", "run", "start"] 