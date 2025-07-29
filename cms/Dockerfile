# Используем официальный Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости (включая devDependencies для сборки)
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем админку Strapi
RUN npm run build

# Открываем порт
EXPOSE 1337

# Для хранения загруженных файлов
VOLUME ["/app/public/uploads"]

# Запускаем Strapi
CMD ["npm", "run", "start"] 