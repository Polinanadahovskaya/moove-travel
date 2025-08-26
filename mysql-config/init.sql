-- Создать пользователя с доступом только с определенного IP
CREATE USER 'strapi'@'%' IDENTIFIED BY 'strapi';
GRANT ALL PRIVILEGES ON strapi.* TO 'strapi'@'%';

-- Или ограничить доступ только с определенного IP (замените на ваш IP)
-- CREATE USER 'strapi'@'88.247.42.220' IDENTIFIED BY 'strapi';
-- GRANT ALL PRIVILEGES ON strapi.* TO 'strapi'@'88.247.42.220';

FLUSH PRIVILEGES;
