# Info

This is a project for my thesis

## Install

First you need to set up the workspace

-   install php 7.4 non-thread safe
-   enable extensions
-   install mongodb PHP extension: https://www.php.net/manual/en/mongodb.installation.windows.php
-   set up a postgresql server
-   you may need to add the postgres \bin directory to your PATH

Run these commands in the cloned/downloaded repo:

-   composer require jenssegers/mongodb
-   composer install
-   npm install
-   npm run dev
-   copy .env.example and rename it to .env
-   create a database
-   in .env file set up the database connection
-   php artisan key:generate
-   php artisan config:cache
-   php artisan migrate
-   php artisan storage:link

After this you can run a dev server using the following command:

-   php artisan serve

You can access the website at

-   localhost:8000

MongoDB Compass connection string: mongodb://localhost:27017/mqttadmin

## IMPORTANT NOTES

-   As of now, the application cannot run without the installation of the SZTE iot gateway (github.com/sed-szeged/iotgateway) - to use the app, you need to start the iot gateway docker images

-   I use a public broker for testing (https://test.mosquitto.org) - host: ws://test.mosquitto.org:8081 - set a username/password before connecting

-   To send data to the app through the mosquitto broker, i used MQTTX - host: mqtt://test.mosquitto.org:1883 - set a username/password before connecting

-   Devices stored in mongoDB like this: asd-1 , where 'asd' is the name and the '1' is the dashboard id

## TODO

-   When regisering a new user check whether that use already exists - ERROR: duplicate key value violates unique constraint "users_email_unique" DETAIL: Key (email)=(asd@asd.asd) already exists.

-   images are not loaded in (something with docker, in docker cli storage link can generate: The [/app/public/storage] link has been connected to [/app/storage/app/public].)
-   could be also that images are not cloned from git repo

-   szakdogába írni: mqttx és használata + dockerized project

-   remove mongodb from project - just comment it out - composer remove jenssegers/mongodb

-   be able to rename the dashboard name

-   canvas delete button decrease time interval

-   refresh migrations and do windows and walls db layout as doors

-   dashboardController should be 2 seperate controller - for better readability

## TODO FIX BROKER

-   Plain WebSockets - listener 8080 - protocol websockets

-   manage to connect to iotgateway through mqttx - on port 1883 you can only connect to a created device - device name / password

-   config szte broker to support websockets - iotgateway/mosquitto-auth-plugin/mosquitto/config.mk ==> line 72 - iotgateway/mosquitto-auth-plugin/mosquitto/mosquitto.conf - set websocket listening port - netstat -ab

-   on windows it appears that Intel started using this port for some of their drivers. Bad Intel. - fix: - Start menu - Type: Services - Find the service called: Intel(R) Graphics Command Center Service - Rightclick > Properties > Startup type = Disabled

-   let the port through the firewall

## KNOWN BUGS

-   when adding multiple iot devices they get the same topics (needs check)

-   GET https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg net::ERR_CONNECTION_TIMED_OUT - get maybe a new logo

-   you can generate topics without name, then set a name, and create a device without proper topics

-   device name on canvas could disappear at the sides, needs optimizing - needs a max length check, maybe 15 characters?

-   canvas: in function selectobject() -> don't be able to select multiple objects at once
