FROM php:7.4

RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    openssl \
    postgresql \
    libpq-dev \
    nodejs \
    && docker-php-ext-install pdo pdo_pgsql \
    && rm -rf /var/lib/apt/lists

COPY composer* /usr/src/app/
COPY .env.example /usr/src/app/.env

WORKDIR /usr/src/app

COPY . .

COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer install

RUN npm install \
    npm run dev

RUN php artisan key:generate \
    php artisan config:cache \
    php artisan migrate \
    php artisan storage:link

CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000