# Используем официальный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальные файлы проекта
COPY . .

# Собираем админку Strapi
#RUN npm run build
RUN npm run develop

# Открываем порт (по умолчанию 1337, можно переопределить через переменные окружения)
EXPOSE 1337

# Для хранения загруженных файлов и базы данных (если используется SQLite)
VOLUME ["/app/public/uploads", "/app/.tmp"]

# Запускаем Strapi
CMD ["npm", "run", "start"] 