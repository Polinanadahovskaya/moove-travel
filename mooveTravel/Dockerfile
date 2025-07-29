# Используем официальный Node.js образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --ignore-scripts

# Копируем остальные файлы проекта
COPY . .

# Собираем Nuxt-приложение
RUN npm run build

EXPOSE 3000

ENV NUXT_OXC_PARSER_DISABLED=true
ENV NODE_ENV=production

CMD ["npm", "run", "start"] 