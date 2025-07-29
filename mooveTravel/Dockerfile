# Используем официальный Node.js образ
FROM node:20 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN yarn cache clean && yarn install --frozen-lockfile

# Копируем остальные файлы проекта
COPY . .

# Собираем Nuxt-приложение
RUN yarn build

# Production image
FROM node:20
WORKDIR /app

# Копируем только необходимые файлы из build stage
COPY --from=build /app ./
# Не делаем npm install повторно!

EXPOSE 3000

ENV NUXT_OXC_PARSER_DISABLED=true

CMD ["yarn", "start"] 