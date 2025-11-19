# Инструкция по обновлению SSL сертификата на проде

## Текущая конфигурация

Проект использует Let's Encrypt сертификаты для домена `moov-travel.ru`. Сертификаты монтируются из хоста в контейнер nginx:
- Сертификат: `/etc/letsencrypt/live/moov-travel.ru/fullchain.pem`
- Приватный ключ: `/etc/letsencrypt/live/moov-travel.ru/privkey.pem`

## Способы обновления сертификата

### Способ 1: Использование готового скрипта (Рекомендуется)

#### На Linux/Mac:
```bash
chmod +x update-certificate.sh
./update-certificate.sh
```

#### На Windows (PowerShell):
```powershell
.\update-certificate.ps1
```

### Способ 2: Ручное обновление через Docker

1. Убедитесь, что nginx контейнер запущен:
```bash
docker-compose up -d nginx
```

2. Запустите certbot для обновления сертификата:
```bash
docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/www/certbot:/var/www/certbot \
  certbot/certbot renew --webroot \
  --webroot-path=/var/www/certbot \
  --email andrey@moov-travel.ru \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  -d moov-travel.ru
```

3. Перезагрузите nginx контейнер:
```bash
docker exec moove-nginx nginx -s reload
```

### Способ 3: Обновление через certbot на хосте (если установлен)

Если certbot установлен напрямую на сервере:
```bash
sudo certbot renew --force-renewal
sudo docker exec moove-nginx nginx -s reload
```

## Автоматическое обновление

Let's Encrypt сертификаты действительны 90 дней. Рекомендуется настроить автоматическое обновление через cron:

### На Linux:
Добавьте в crontab (`crontab -e`):
```bash
# Обновление сертификата каждый месяц в 3:00
0 3 1 * * /path/to/update-certificate.sh
```

### На Windows:
Используйте Планировщик заданий Windows для запуска `update-certificate.ps1` ежемесячно.

## Проверка сертификата

После обновления проверьте, что сертификат применен:
```bash
# Проверка через openssl
openssl s_client -connect moov-travel.ru:443 -servername moov-travel.ru

# Или через браузер
# Откройте https://moov-travel.ru и проверьте информацию о сертификате
```

## Важные замечания

1. **Права доступа**: Убедитесь, что директории `/etc/letsencrypt` и `/var/www/certbot` доступны для чтения контейнеру nginx
2. **Порты**: Порты 80 и 443 должны быть открыты для работы Let's Encrypt
3. **Домен**: Домен `moov-travel.ru` должен указывать на IP вашего сервера
4. **Резервное копирование**: Перед обновлением рекомендуется сделать бэкап текущих сертификатов

## Устранение проблем

### Ошибка "Container nginx not running"
```bash
docker-compose up -d nginx
```

### Ошибка доступа к сертификатам
Проверьте права доступа:
```bash
sudo chmod -R 755 /etc/letsencrypt
sudo chmod -R 755 /var/www/certbot
```

### Сертификат не обновляется
Попробуйте принудительное обновление:
```bash
docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/www/certbot:/var/www/certbot \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email andrey@moov-travel.ru \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  -d moov-travel.ru
```

