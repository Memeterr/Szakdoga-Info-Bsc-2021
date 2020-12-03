$(function () {
	//You can send statis data right away
	//$('#form').append('<input type="hidden" name="devicename[type]" value="light" />');
	//$('#form').append('<input type="hidden" name="devicename[x-coor]" value="10" />');
});
//For data which could change, use a button's onclick attribute
function addDashValues() {
	//The timestamp value could be an id if needed
	for(let i=0; i<blueprint.windowFrames.length; i++) {
		$('#form').append('<input type="hidden" name="window_' + i + '[x]" value="' + blueprint.windowFrames[i].x + '" />');
		$('#form').append('<input type="hidden" name="window_' + i + '[y]" value="' + blueprint.windowFrames[i].y + '" />');
		$('#form').append('<input type="hidden" name="window_' + i + '[isPlaced]" value="' + blueprint.windowFrames[i].isPlaced + '" />');
		$('#form').append('<input type="hidden" name="window_' + i + '[isRotated]" value="' + blueprint.windowFrames[i].isRotated + '" />');
		$('#form').append('<input type="hidden" name="window_' + i + '[timeStamp]" value="' + blueprint.windowFrames[i].timeStamp + '" />');
		$('#form').append('<input type="hidden" name="window_' + i + '[firstPlacedown]" value="' + blueprint.windowFrames[i].firstPlacedown + '" />');
	}

	for(let i=0; i<blueprint.doors.length; i++) {
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

	for(let i=0; i<blueprint.walls.length; i++) {
		$('#form').append('<input type="hidden" name="wall_' + i + '[x1]" value="' + blueprint.walls[i].x1 + '" />');
		$('#form').append('<input type="hidden" name="wall_' + i + '[y1]" value="' + blueprint.walls[i].y1 + '" />');
		$('#form').append('<input type="hidden" name="wall_' + i + '[x2]" value="' + blueprint.walls[i].x2 + '" />');
		$('#form').append('<input type="hidden" name="wall_' + i + '[y2]" value="' + blueprint.walls[i].y2 + '" />');
		$('#form').append('<input type="hidden" name="wall_' + i + '[isPlaced]" value="' + blueprint.walls[i].isPlaced + '" />');
		$('#form').append('<input type="hidden" name="wall_' + i + '[timeStamp]" value="' + blueprint.walls[i].timeStamp + '" />');
	}
}