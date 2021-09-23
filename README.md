# Info

This is a project for my degree

## Install

First you need to set up the workspace
* install php 7.4 non-thread safe
* enable extensions
* install mongodb PHP extension: https://www.php.net/manual/en/mongodb.installation.windows.php
* set up a postgresql server
* you may need to add the postgres \bin directory to your PATH

Run these commands in the cloned/downloaded repo:
* composer require jenssegers/mongodb
* composer install
* npm install
* npm run dev
* copy .env.example and rename it to .env
* create a database
* in .env file set up the database connection
* php artisan key:generate
* php artisan config:cache
* php artisan migrate

After this you can run a dev server using the following command:
* php artisan serve

You can access the website at
* localhost:8000

MongoDB Compass connection string: mongodb://localhost:27017/mqttadmin

## TODO

* to be able to delete the image

* kép tárolása, ha azt töltenek fel

* show the canvas picture in the 'My Dashboards' menu

* establish connection with mqtt
	- if not possible with local broker, use a free cloud broker
	- if nothing works, write a function that simulates data flow

* when adding new device, the type should be selectable (maybe a button for each one?)
	- these are predefined, so the user can't set their own type

* devices need an id for a dashboard in mongoDB

* at create device modal generate default topics, just like at the iotgateway
	- maybe it's enough if only the object's coordinates and name are stored in pgsql, other attributes already stored in mongodb

* canvas delete button decrease time interval

* refresh migrations and do windows and walls db layout as doors

* livewire to generate topics on device modal

* dashboardController should be 2 seperate controller
	- for better readability

## BUG

* GET https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg net::ERR_CONNECTION_TIMED_OUT
	- get maybe a new logo

* you can generate topics without name, then set a name, and create a device without proper topics

* device name on canvas could disappear at the sides, needs optimizing
	- needs a max length check, maybe 15 characters?

* canvas: in function selectobject() -> don't be able to select multiple objects at once
