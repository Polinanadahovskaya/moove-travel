# Используем официальный Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальные файлы проекта
COPY . .

# Собираем админку Strapi
RUN npm run build

# Открываем порт (по умолчанию 1337, можно переопределить через переменные окружения)
EXPOSE 1337

# Для хранения загруженных файлов
VOLUME ["/app/public/uploads"]

# Запускаем Strapi
CMD ["npm", "run", "start"] 