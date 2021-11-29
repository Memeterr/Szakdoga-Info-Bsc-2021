# Info

This is the project for my 2021 SZTE IT thesis

## Installation

-   Clone the repository to local machine

In the cloned repository, run the following commands:

-   docker-compose build

-   docker-compose up

You can access the website at:

-   localhost:8000

## IMPORTANT NOTES

-   I used a public broker for testing (https://test.mosquitto.org) - host: ws://test.mosquitto.org:8081 - set a username/password before connecting

-   To send data to the app through the mosquitto broker, i used MQTTX - host: mqtt://test.mosquitto.org:1883 - set a username/password before connecting

## TODO / FUTURE WORK

-   When regisering a new user check whether that use already exists - ERROR: duplicate key value violates unique constraint "users_email_unique" DETAIL: Key (email)=(asd@asd.asd) already exists.

-   images are not loaded in (something with docker, in docker cli storage link can generate: The [/app/public/storage] link has been connected to [/app/storage/app/public].)
-   could be also that images are not cloned from git repo

-   be able to rename the dashboard name

-   canvas delete button decrease time interval

-   refresh migrations and do windows and walls db layout as doors

-   dashboardController should be 2 seperate controller - for better readability

## KNOWN BUGS

-   when adding multiple iot devices they get the same topics (needs check)

-   GET https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg net::ERR_CONNECTION_TIMED_OUT - get maybe a new logo

-   you can generate topics without name, then set a name, and create a device without proper topics

-   device name on canvas could disappear at the sides, needs optimizing - needs a max length check, maybe 15 characters?

-   canvas: in function selectobject() -> don't be able to select multiple objects at once
