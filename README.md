# Info

This is a project for my degree

## TODO

* when setting device name/topic:
	- isFollowing = false
	- it puts down the device on the canvas, but when clicked on cancel, it deletes it
		- maybe enough if just the canvas delete function is called on the last item on that device array

* device name on canvas could disappear at the sides, needs optimizing
	- needs a max length check, maybe 15 characters?

* finish the lights migration setup

* in function selectobject() -> don't be able to select multiple objects at once
* wall not getting reset when clicked on the trash icon
	- needs a boolean which checks its status

* jquery ui popup when an item put down? -to set the device Name and Route

* drawing functions for the canvas when retrieving data from the database

* charts button on dashboard page (show.blade.php) next to header, with name like 'charts for this dashboard'