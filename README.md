# Info

This is a project for my degree

## Install

Run these commands in the cloned/downloaded repo:
* composer install
* npm install
* npm run dev
* copy .env.example and rename it to .env
* create a database
* in .env file set up the database connection
* php artisan config:cache
* php artisan migrate

After this you can run a dev server using the following command:
* php artisan serve

You can access the website at
* localhost:8000

## TODO

* refresh migrations and do windows and walls db layout as doors

* delete button on show.blade.php

* save changes button on show.blade.php -> updates that dashboard

* device name on canvas could disappear at the sides, needs optimizing
	- needs a max length check, maybe 15 characters?

* in function selectobject() -> don't be able to select multiple objects at once

* charts button on dashboard page (show.blade.php) next to header, with name like 'charts for this dashboard'
