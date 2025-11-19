# PowerShell скрипт для обновления SSL сертификата Let's Encrypt на проде
# Использование: .\update-certificate.ps1

$DOMAIN = "moov-travel.ru"
$EMAIL = "andrey@moov-travel.ru"

Write-Host "🔄 Начинаем обновление SSL сертификата для $DOMAIN..." -ForegroundColor Cyan

# Проверяем, запущен ли nginx контейнер
$nginxRunning = docker ps | Select-String "moove-nginx"
if (-not $nginxRunning) {
    Write-Host "❌ Контейнер nginx не запущен. Запустите его сначала: docker-compose up -d nginx" -ForegroundColor Red
    exit 1
}

# Обновляем сертификат через certbot
Write-Host "📝 Обновляем сертификат через certbot..." -ForegroundColor Yellow

# На Windows пути могут отличаться, используйте абсолютные пути
# Если используете WSL или Linux-подсистему, пути будут как в Linux
docker run --rm `
  -v /etc/letsencrypt:/etc/letsencrypt `
  -v /var/www/certbot:/var/www/certbot `
  certbot/certbot renew --webroot `
  --webroot-path=/var/www/certbot `
  --email $EMAIL `
  --agree-tos `
  --no-eff-email `
  --force-renewal `
  -d $DOMAIN

# Проверяем результат
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Сертификат успешно обновлен!" -ForegroundColor Green
    Write-Host "🔄 Перезагружаем nginx контейнер..." -ForegroundColor Yellow
    docker exec moove-nginx nginx -s reload
    Write-Host "✅ Nginx перезагружен с новым сертификатом!" -ForegroundColor Green
} else {
    Write-Host "❌ Ошибка при обновлении сертификата" -ForegroundColor Red
    exit 1
}

Write-Host "✨ Готово! Сертификат обновлен и применен." -ForegroundColor Green

