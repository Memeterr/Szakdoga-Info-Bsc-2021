FROM php:7.4-alpine3.14

WORKDIR /app

COPY .env.example ./.env
COPY . .

RUN apk add --no-cache --virtual .gyp \
    python3 \
    make \
    g++ \
    nodejs \
    npm \
    postgresql-dev \
    libpq \
    && docker-php-ext-install pdo pdo_pgsql \
    && npm install \
    && npm run dev

COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer install && composer update

RUN php artisan key:generate
RUN php artisan config:cache
RUN php artisan migrate
RUN php artisan storage:link

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000
# CMD php artisan serve --host=0.0.0.0 --port=8000