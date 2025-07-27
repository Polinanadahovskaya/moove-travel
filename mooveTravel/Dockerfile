# Используем официальный Node.js образ
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Production image, copy all the files and run next
FROM node:20-alpine AS production
WORKDIR /app

# Копируем только необходимые файлы из builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Экспонируем порт
EXPOSE 3000

# Запускаем preview сервер
CMD ["npx", "nuxt", "preview"] 