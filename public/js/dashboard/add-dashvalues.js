$(function () {
	//You can send statis data right away
	//$('#form').append('<input type="hidden" name="imageSet" value="' + blueprint.imageSet + 't" />');
	//$('#form').append('<input type="hidden" name="devicename[x-coor]" value="10" />');
});

function updateDashValues() {

	//Adds deleted items
	if(blueprint.deletedOldItems.length > 0) {
		for(let i=0; i<blueprint.deletedOldItems.length; i++) {
			if(blueprint.deletedOldItems[i] instanceof windowFrame) {
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][id]" value="' + blueprint.deletedOldItems[i].id + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][x]" value="' + blueprint.deletedOldItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][y]" value="' + blueprint.deletedOldItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][isRotated]" value="' + blueprint.deletedOldItems[i].isRotated + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="deleted[window_' + i + '][firstPlacedown]" value="' + blueprint.deletedOldItems[i].firstPlacedown + '" />');
			}
			if(blueprint.deletedOldItems[i] instanceof Wall) {
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][id]" value="' + blueprint.deletedOldItems[i].id + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][x1]" value="' + blueprint.deletedOldItems[i].x1 + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][y1]" value="' + blueprint.deletedOldItems[i].y1 + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][x2]" value="' + blueprint.deletedOldItems[i].x2 + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][y2]" value="' + blueprint.deletedOldItems[i].y2 + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="deleted[wall_' + i + '][timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
			}
			if(blueprint.deletedOldItems[i] instanceof Door) {
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][id]" value="' + blueprint.deletedOldItems[i].id + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][x]" value="' + blueprint.deletedOldItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][y]" value="' + blueprint.deletedOldItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][w]" value="' + blueprint.deletedOldItems[i].w + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][h]" value="' + blueprint.deletedOldItems[i].h + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][start]" value="' + blueprint.deletedOldItems[i].start + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][stop]" value="' + blueprint.deletedOldItems[i].stop + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][isRotated]" value="' + blueprint.deletedOldItems[i].isRotated + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="deleted[door_' + i + '][firstPlacedown]" value="' + blueprint.deletedOldItems[i].firstPlacedown + '" />');
			}
			if(blueprint.deletedOldItems[i] instanceof Light) {
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][id]" value="' + blueprint.deletedOldItems[i].id + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][x]" value="' + blueprint.deletedOldItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][y]" value="' + blueprint.deletedOldItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][isOn]" value="' + blueprint.deletedOldItems[i].isOn + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][name]" value="' + blueprint.deletedOldItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][pwd]" value="' + blueprint.deletedOldItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][topics]" value="' + blueprint.deletedOldItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="deleted[light_' + i + '][firstPlacedown]" value="' + blueprint.deletedOldItems[i].firstPlacedown + '" />');
			}
			if(blueprint.deletedOldItems[i] instanceof Thermometer) {
				$('#form').append('<input type="hidden" name="thermo_' + i + '[x]" value="' + blueprint.deletedOldItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[y]" value="' + blueprint.deletedOldItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[name]" value="' + blueprint.deletedOldItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[pwd]" value="' + blueprint.deletedOldItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[topics]" value="' + blueprint.deletedOldItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[firstPlacedown]" value="' + blueprint.deletedOldItems[i].firstPlacedown + '" />');
			}
			if(blueprint.deletedOldItems[i] instanceof Humidity) {
				$('#form').append('<input type="hidden" name="humidity_' + i + '[x]" value="' + blueprint.deletedOldItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[y]" value="' + blueprint.deletedOldItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[isPlaced]" value="' + blueprint.deletedOldItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[name]" value="' + blueprint.deletedOldItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[pwd]" value="' + blueprint.deletedOldItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[topics]" value="' + blueprint.deletedOldItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[timeStamp]" value="' + blueprint.deletedOldItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[firstPlacedown]" value="' + blueprint.deletedOldItems[i].firstPlacedown + '" />');
			}
		}
	}

	//Adds new items
	if(blueprint.newItems.length > 0) {
		for(let i=0; i<blueprint.newItems.length; i++) {
			if(blueprint.newItems[i] instanceof windowFrame) {
				$('#form').append('<input type="hidden" name="new[window_' + i + '][x]" value="' + blueprint.newItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="new[window_' + i + '][y]" value="' + blueprint.newItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="new[window_' + i + '][isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="new[window_' + i + '][isRotated]" value="' + blueprint.newItems[i].isRotated + '" />');
				$('#form').append('<input type="hidden" name="new[window_' + i + '][timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="new[window_' + i + '][firstPlacedown]" value="' + blueprint.newItems[i].firstPlacedown + '" />');
			}
			if(blueprint.newItems[i] instanceof Wall) {
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][x1]" value="' + blueprint.newItems[i].x1 + '" />');
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][y1]" value="' + blueprint.newItems[i].y1 + '" />');
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][x2]" value="' + blueprint.newItems[i].x2 + '" />');
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][y2]" value="' + blueprint.newItems[i].y2 + '" />');
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="new[wall_' + i + '][timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
			}
			if(blueprint.newItems[i] instanceof Door) {
				$('#form').append('<input type="hidden" name="new[door_' + i + '][x]" value="' + blueprint.newItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][y]" value="' + blueprint.newItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][w]" value="' + blueprint.newItems[i].w + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][h]" value="' + blueprint.newItems[i].h + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][start]" value="' + blueprint.newItems[i].start + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][stop]" value="' + blueprint.newItems[i].stop + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][isRotated]" value="' + blueprint.newItems[i].isRotated + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="new[door_' + i + '][firstPlacedown]" value="' + blueprint.newItems[i].firstPlacedown + '" />');
			}
			if(blueprint.newItems[i] instanceof Light) {
				$('#form').append('<input type="hidden" name="new[light_' + i + '][x]" value="' + blueprint.newItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][y]" value="' + blueprint.newItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][isOn]" value="' + blueprint.newItems[i].isOn + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][name]" value="' + blueprint.newItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][pwd]" value="' + blueprint.newItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][topics]" value="' + blueprint.newItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="new[light_' + i + '][firstPlacedown]" value="' + blueprint.newItems[i].firstPlacedown + '" />');
			}
			if(blueprint.newItems[i] instanceof Thermometer) {
				$('#form').append('<input type="hidden" name="thermo_' + i + '[x]" value="' + blueprint.newItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[y]" value="' + blueprint.newItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[name]" value="' + blueprint.newItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[pwd]" value="' + blueprint.newItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[topics]" value="' + blueprint.newItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="thermo_' + i + '[firstPlacedown]" value="' + blueprint.newItems[i].firstPlacedown + '" />');
			}
			if(blueprint.newItems[i] instanceof Humidity) {
				$('#form').append('<input type="hidden" name="humidity_' + i + '[x]" value="' + blueprint.newItems[i].x + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[y]" value="' + blueprint.newItems[i].y + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[isPlaced]" value="' + blueprint.newItems[i].isPlaced + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[name]" value="' + blueprint.newItems[i].name + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[pwd]" value="' + blueprint.newItems[i].password + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[topics]" value="' + blueprint.newItems[i].topics + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[timeStamp]" value="' + blueprint.newItems[i].timeStamp + '" />');
				$('#form').append('<input type="hidden" name="humidity_' + i + '[firstPlacedown]" value="' + blueprint.newItems[i].firstPlacedown + '" />');
			}
		}
	}

}

//For data which could change, use a button's onclick attribute
function addDashValues() {
	$('#form').append('<input type="hidden" name="imageSet" value="' + blueprint.imageSet + '" />');

	//The timestamp value could be an id if needed
	for(let i=0; i<blueprint.lights.length; i++) {
		if(blueprint.lights[i].isPlaced) {
			$('#form').append('<input type="hidden" name="light_' + i + '[x]" value="' + blueprint.lights[i].x + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[y]" value="' + blueprint.lights[i].y + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[isPlaced]" value="' + blueprint.lights[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[isOn]" value="' + blueprint.lights[i].isOn + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[name]" value="' + blueprint.lights[i].name + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[pwd]" value="' + blueprint.lights[i].password + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[topics]" value="' + blueprint.lights[i].topics + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[timeStamp]" value="' + blueprint.lights[i].timeStamp + '" />');
			$('#form').append('<input type="hidden" name="light_' + i + '[firstPlacedown]" value="' + blueprint.lights[i].firstPlacedown + '" />');
		}
	}

	for(let i=0; i<blueprint.thermos.length; i++) {
		if(blueprint.thermos[i].isPlaced) {
			$('#form').append('<input type="hidden" name="thermo_' + i + '[x]" value="' + blueprint.thermos[i].x + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[y]" value="' + blueprint.thermos[i].y + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[isPlaced]" value="' + blueprint.thermos[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[name]" value="' + blueprint.thermos[i].name + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[pwd]" value="' + blueprint.thermos[i].password + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[topics]" value="' + blueprint.thermos[i].topics + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[timeStamp]" value="' + blueprint.thermos[i].timeStamp + '" />');
			$('#form').append('<input type="hidden" name="thermo_' + i + '[firstPlacedown]" value="' + blueprint.thermos[i].firstPlacedown + '" />');
		}
	}

	for(let i=0; i<blueprint.humidities.length; i++) {
		if(blueprint.humidities[i].isPlaced) {
			$('#form').append('<input type="hidden" name="humidity_' + i + '[x]" value="' + blueprint.humidities[i].x + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[y]" value="' + blueprint.humidities[i].y + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[isPlaced]" value="' + blueprint.humidities[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[name]" value="' + blueprint.humidities[i].name + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[pwd]" value="' + blueprint.humidities[i].password + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[topics]" value="' + blueprint.humidities[i].topics + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[timeStamp]" value="' + blueprint.humidities[i].timeStamp + '" />');
			$('#form').append('<input type="hidden" name="humidity_' + i + '[firstPlacedown]" value="' + blueprint.humidities[i].firstPlacedown + '" />');
		}
	}

	for(let i=0; i<blueprint.windowFrames.length; i++) {
		if(blueprint.windowFrames[i].isPlaced) {
			$('#form').append('<input type="hidden" name="window_' + i + '[x]" value="' + blueprint.windowFrames[i].x + '" />');
			$('#form').append('<input type="hidden" name="window_' + i + '[y]" value="' + blueprint.windowFrames[i].y + '" />');
			$('#form').append('<input type="hidden" name="window_' + i + '[isPlaced]" value="' + blueprint.windowFrames[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="window_' + i + '[isRotated]" value="' + blueprint.windowFrames[i].isRotated + '" />');
			$('#form').append('<input type="hidden" name="window_' + i + '[timeStamp]" value="' + blueprint.windowFrames[i].timeStamp + '" />');
			$('#form').append('<input type="hidden" name="window_' + i + '[firstPlacedown]" value="' + blueprint.windowFrames[i].firstPlacedown + '" />');
		}
	}

	for(let i=0; i<blueprint.doors.length; i++) {
		if(blueprint.doors[i].isPlaced) {
			$('#form').append('<input type="hidden" name="door_' + i + '[x]" value="' + blueprint.doors[i].x + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[y]" value="' + blueprint.doors[i].y + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[w]" value="' + blueprint.doors[i].w + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[h]" value="' + blueprint.doors[i].h + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[start]" value="' + blueprint.doors[i].start + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[stop]" value="' + blueprint.doors[i].stop + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[isPlaced]" value="' + blueprint.doors[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[isRotated]" value="' + blueprint.doors[i].isRotated + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[timeStamp]" value="' + blueprint.doors[i].timeStamp + '" />');
			$('#form').append('<input type="hidden" name="door_' + i + '[firstPlacedown]" value="' + blueprint.doors[i].firstPlacedown + '" />');
		}
	}

	for(let i=0; i<blueprint.walls.length; i++) {
		if(blueprint.walls[i].isPlaced) {
			$('#form').append('<input type="hidden" name="wall_' + i + '[x1]" value="' + blueprint.walls[i].x1 + '" />');
			$('#form').append('<input type="hidden" name="wall_' + i + '[y1]" value="' + blueprint.walls[i].y1 + '" />');
			$('#form').append('<input type="hidden" name="wall_' + i + '[x2]" value="' + blueprint.walls[i].x2 + '" />');
			$('#form').append('<input type="hidden" name="wall_' + i + '[y2]" value="' + blueprint.walls[i].y2 + '" />');
			$('#form').append('<input type="hidden" name="wall_' + i + '[isPlaced]" value="' + blueprint.walls[i].isPlaced + '" />');
			$('#form').append('<input type="hidden" name="wall_' + i + '[timeStamp]" value="' + blueprint.walls[i].timeStamp + '" />');
		}
	}
}