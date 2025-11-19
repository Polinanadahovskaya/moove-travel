#!/bin/bash

# Скрипт для обновления SSL сертификата Let's Encrypt на проде
# Использование: ./update-certificate.sh

DOMAIN="moov-travel.ru"
EMAIL="andrey@moov-travel.ru"

echo "🔄 Начинаем обновление SSL сертификата для $DOMAIN..."

# Проверяем, запущен ли nginx контейнер
if ! docker ps | grep -q moove-nginx; then
    echo "❌ Контейнер nginx не запущен. Запустите его сначала: docker-compose up -d nginx"
    exit 1
fi

# Обновляем сертификат через certbot
echo "📝 Обновляем сертификат через certbot..."

docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/www/certbot:/var/www/certbot \
  certbot/certbot renew --webroot \
  --webroot-path=/var/www/certbot \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  -d $DOMAIN

# Проверяем результат
if [ $? -eq 0 ]; then
    echo "✅ Сертификат успешно обновлен!"
    echo "🔄 Перезагружаем nginx контейнер..."
    docker exec moove-nginx nginx -s reload
    echo "✅ Nginx перезагружен с новым сертификатом!"
else
    echo "❌ Ошибка при обновлении сертификата"
    exit 1
fi

echo "✨ Готово! Сертификат обновлен и применен."

