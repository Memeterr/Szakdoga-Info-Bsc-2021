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

MongoDB Compass connection string: mongodb://localhost:27017/mqttadmin

## TODO

* devices need an id for a dashboard in mongoDB

* at create device modal generate default topics, just like at the iotgateway
	- maybe it's enough if only the object's coordinates and name are stored in pgsql, other attributes already stored in mongodb

* canvas delete button decrease time interval

* refresh migrations and do windows and walls db layout as doors

* delete button on show.blade.php -> deletes that dashboard

* save changes button on show.blade.php -> updates that dashboard
	- deletes deleted objects from db
	- adds new ones to db

* livewire to generate topics on device modal

## BUG

* you can generate topics without name, then set a name, and create a device without proper topics

* device name on canvas could disappear at the sides, needs optimizing
	- needs a max length check, maybe 15 characters?

* in function selectobject() -> don't be able to select multiple objects at once
