let blueprintTemplate = function (p) {
	p.canvasParams = {w:800, h:500};
	p.bcolor = p.color(0, 120, 194);
	p.uploadedImg = null;

	p.startTime = null;

	p.referenceWall = new Wall(0, 0, 0, 0, p);
	p.referenceWindowFrame = new windowFrame(30, 90, p);
	p.referenceDoor = new Door(100, 122, 50, 50, p.PI, p.PI + p.HALF_PI, p);

	p.referenceLight = new Light(100, 100, p);

	p.imageSet = false;

	p.margin = 57;
	p.saveButtonWpos = 140;

	p.editMode = false;
	p.linerStatus = false;
	p.rubberLineOn = false;

	// Drawables
	p.doors = [];
	p.windowFrames = [];
	p.walls = [];
	p.linePoints = [];

	// Devices
	p.lights = [];

	p.singleDashView = false;
    if (window.location.href.indexOf("/dashboard") > -1) {
      p.singleDashView = true;
    }

	//p.countSelected = 0;

	p.setup = function() {
		p.canvasDiv = document.getElementById('canvas_container');
		//p.width = p.canvasDiv.offsetWidth;
		p.canvasWidth = $("#canvas_container").width();
		p.sidenavWidth = $('.sidenav').width();

		p.canvas = p.createCanvas(p.canvasWidth, p.canvasParams.h);
		p.canvas.parent("#canvas_container");
		p.background(0, 120, 194);

		//Images
		p.lightOffImg = p.loadImage('../js/sketchLibrary/assets/lightOff.png');
		p.lightOnImg = p.loadImage('../js/sketchLibrary/assets/lightOn.png');

		//Upload file button, calls p.handleFile
		//Only appears when creating a new dash
		if (!p.singleDashView) {
			p.fileInput = p.createFileInput(p.handleFile);
			p.fileInput.style('cursor', 'pointer');
			p.fileInput.parent("#header");
		}

		//Initialize the objects if there's any
		if (windows?.length) {
			windows.forEach(p.initializeWindow);
		}
		if (doors?.length) {
			doors.forEach(p.initializeDoor);
		}
		if (walls?.length) {
			walls.forEach(p.initializeWall);
		}
		//Initialize the devices if there's any
		if (lights?.length) {
			lights.forEach(p.initializeLight);
		}
		
		//p.fileInput.position(p.canvasWidth/30 - 25, p.canvasParams.h - 40);
		//p.fileInput.position(0, 0);
		
		//p.borders();
	}

	p.draw = function () {
		p.background(p.bcolor);
		if(p.uploadedImg) {
			p.image(p.uploadedImg, 0, 0, p.width, p.height);
		}
		//p.borders();
		
		//Puts down a wall
		if (p.linerStatus) {
			p.putDownWall();
		}

		//Puts down a chosen object
		if (p.referenceDoor.isFollowing) {
			p.canvas.mousePressed(p.putDownDoor);
		} else if (p.referenceWindowFrame.isFollowing) {
			p.canvas.mousePressed(p.putDownWindow);
		}

		//Puts down a chosen device
		if (p.referenceLight.isFollowing) {
			p.canvas.mousePressed(p.putDownLight);
		}

		//Resets selected objects if selectMode turned off
		if (p.editmode == false) {
			p.windowFrames.forEach(p.endSelectMode);
			p.walls.forEach(p.endSelectMode);
			p.doors.forEach(p.endSelectMode);
		}
			
		//Draw devices
		p.lights.forEach(p.drawObject);

		//Draw objects
		p.walls.forEach(p.drawObject);
		p.windowFrames.forEach(p.drawObject);
		p.doors.forEach(p.drawObject);

		//WindowFrame follows mouse
		if (p.referenceWindowFrame.isFollowing == true && p.referenceWindowFrame.isRotated == true) {
			p.followWall = new windowFrame(p.mouseX-(p.referenceWindowFrame.h/2), p.mouseY-(p.referenceWindowFrame.w/2), p , p.referenceWindowFrame.h, p.referenceWindowFrame.w);
			p.followWall.show();
		} else if (p.referenceWindowFrame.isFollowing == true) {
			p.followWall = new windowFrame(p.mouseX-(p.referenceWindowFrame.w/2), p.mouseY-(p.referenceWindowFrame.h/2), p);
			p.followWall.show();
		}
		
		//Door follows mouse
		if (p.referenceDoor.isFollowing == true && p.referenceDoor.isRotated == true) {
			//TODO isRotated like clickcount (number) -> this way you can always rotate
			p.door = new Door(p.mouseX-(p.referenceDoor.w/4), p.mouseY-(p.referenceDoor.h/4), p.referenceDoor.w, p.referenceDoor.h, 0, p.HALF_PI, p);
			p.door.show();
		} else if (p.referenceDoor.isFollowing == true) {
			p.followDoor = new Door(p.mouseX+(p.referenceDoor.w/4), p.mouseY+(p.referenceDoor.h/4), p.referenceDoor.w, p.referenceDoor.h, p.referenceDoor.start, p.referenceDoor.stop, p);
			p.followDoor.show();
		}

		//Light follows mouse
		if (p.referenceLight.isFollowing == true) {
			p.followLight = new Light(p.mouseX-(p.referenceLight.w/2), p.mouseY-(p.referenceLight.h/2), p);
			p.followLight.show();
		}

		//Draw rubber lines for the walls
		if (p.linerStatus) {
			p.drawRubberLine();
		}
	}

	p.windowResized = function() {
		
		/*
		if (p.windowWidth < 750) {
			p.resizeCanvas(p.windowWidth  - p.margin, p.canvasParams.h);
			p.saveButton.position(p.windowWidth - p.margin  - p.saveButtonWpos, p.canvasParams.h - 40);
		} else {
			p.resizeCanvas(p.windowWidth - p.sidenavWidth - p.margin, p.canvasParams.h);
			p.saveButton.position(p.windowWidth - p.sidenavWidth - p.margin  - p.saveButtonWpos, p.canvasParams.h - 40);
		}
		*/
	}

	p.drawRubberLine = function() {
		if (p.linePoints.length == 2) {
			//Draw the line
		} else if (p.linePoints.length > 0) {
			//Draw rubber line from last point to the mouse
			p.push();
			p.strokeWeight(6);
			p.stroke(255);
			p.drawStraightLine();
			//Actual rubber line
			//p.line(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.mouseX, p.mouseY);
			p.pop();
		}
	}

	p.drawStraightLine = function() {
		if ( p.getAngle() ) {
			//Straight line on the X axis
			p.line(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.mouseX, p.linePoints[p.linePoints.length-1][1]);
		} else {
			//Straight line on the Y axis
			p.line(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.linePoints[p.linePoints.length-1][0], p.mouseY);
		}
	}

	p.putDownWindow = function() {
		windowFrameIsRotated: {
			if (p.referenceWindowFrame.isFollowing == true) {
				if(p.referenceWindowFrame.isRotated == true) {
					p.windowFrame = new windowFrame(p.mouseX-(p.referenceWindowFrame.h/2), p.mouseY-(p.referenceWindowFrame.w/2), p, p.referenceWindowFrame.h, p.referenceWindowFrame.w);
					p.windowFrame.isPlaced = true;
					p.windowFrame.isRotated = true;
					p.windowFrames.push(p.windowFrame);
					p.windowFrame.show();
					break windowFrameIsRotated;
				}
				p.windowFrame = new windowFrame(p.mouseX-(p.referenceWindowFrame.w/2), p.mouseY-(p.referenceWindowFrame.h/2), p);
				p.windowFrame.isPlaced = true;
				p.windowFrames.push(p.windowFrame);
				p.windowFrame.show();
			}
		}
	}

	p.putDownDoor = function() {
		if (p.referenceDoor.isFollowing == true && p.referenceDoor.isRotated == true) {
			//TODO isRotated like clickcount (number) -> this way you can always rotate (fully 360 degrees)
			p.door = new Door(p.mouseX-(p.referenceDoor.w/4), p.mouseY-(p.referenceDoor.h/4), p.referenceDoor.w, p.referenceDoor.h, 0, p.HALF_PI, p);
			p.door.isPlaced = true;
			p.door.isRotated = true;
			p.doors.push(p.door);
			p.door.show();
		} else if (p.referenceDoor.isFollowing == true) {
			p.door = new Door(p.mouseX+(p.referenceDoor.w/4), p.mouseY+(p.referenceDoor.h/4), p.referenceDoor.w, p.referenceDoor.h, p.referenceDoor.start, p.referenceDoor.stop, p);
			p.door.isPlaced = true;
			p.doors.push(p.door);
			p.door.show();
		}
	}

	p.putDownWall = function () {
		if (p.linePoints.length == 2) {
			p.startTime = new Date();
			if ( p.getAngle() ) {
				p.wall = new Wall(p.linePoints[0][0], p.linePoints[0][1], p.linePoints[1][0], p.linePoints[0][1], p);
			} else {
				p.wall = new Wall(p.linePoints[0][0], p.linePoints[0][1], p.linePoints[0][0], p.linePoints[1][1], p);
			}
			
			//p.wall = new wall(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.linePoints[0][0], p.linePoints[0][1], p);
			p.wall.isPlaced = true;
			p.walls.push(p.wall);
			p.wall.show();

			p.linePoints = [];
		}
	}

	p.putDownLight = function () {
		if (p.referenceLight.isFollowing == true) {
			$("#deviceModal").show();
			p.referenceLight.isFollowing = false;
			blueprint.referenceLight.addClick();

			p.light = new Light(p.mouseX-(p.referenceLight.w/2), p.mouseY-(p.referenceLight.h/2), p);
			p.light.isPlaced = true;
			p.lights.push(p.light);
			p.light.show();
		}
	}

	p.drawObject = function (object) {
		if (object instanceof Light) {
			if (object.isPlaced && object.isSelected) {
				object.showSelected();
			} else if (object.isPlaced) {
				object.show();
				object.firstPlacedown = false;
			}
		}
		if (object instanceof windowFrame) {
			if (object.isPlaced && object.isSelected) {
				object.showSelected();
			} else if (object.isPlaced) {
				object.show();
				object.firstPlacedown = false;
			}
		}
		if (object instanceof Wall) {
			if (object.isPlaced && object.isSelected) {
				object.showSelected();
			} else if (object.isPlaced) {
				object.show();
				object.firstPlacedown = false;
			}
		}
		if (object instanceof Door) {
			if (object.isPlaced && object.isSelected) {
				object.showSelected();
			} else if (object.isPlaced) {
				object.show();
				object.firstPlacedown = false;
			}
		}
	}

	p.selectObject = function (object) {
		// Type check
		if ( object instanceof windowFrame ) {
			if ( p.cursorOverSquare(object.x, object.y, object.w, object.h) && object.firstPlacedown == false && p.editmode) {
				if(object.clickCount % 2 == 1) {
					object.isSelected = false;
				} else {
					object.isSelected = true;
				}
				object.addClick();
			}
		} else if ( object instanceof Door && object.isRotated ) {
			if ( p.cursorOverSquare(object.x, object.y, object.w/2, object.h/2) && object.firstPlacedown == false && p.editmode) {
				if(object.clickCount % 2 == 1) {
					object.isSelected = false;
				} else {
					object.isSelected = true;
				}
				object.addClick();
			}
		} else if ( object instanceof Door ) {
			if ( p.cursorOverSquare(object.x-object.w/2, object.y-object.h/2, object.w/2, object.h/2) && object.firstPlacedown == false && p.editmode) {
				if(object.clickCount % 2 == 1) {
					object.isSelected = false;
				} else {
					object.isSelected = true;
				}
				object.addClick();
			}
		} else if (object instanceof Wall) {
			if ( p.cursorOverLine(object.x1, object.y1, object.x2, object.y2) && p.editmode) {
				if(object.clickCount % 2 == 1) {
					object.isSelected = false;
				} else {
					object.isSelected = true;
				}
				object.addClick();
			}
		} else if (object instanceof Light) {
			if ( p.cursorOverSquare(object.x, object.y, object.w, object.h) && object.firstPlacedown == false && p.editmode) {
				if(object.clickCount % 2 == 1) {
					object.isSelected = false;
				} else {
					object.isSelected = true;
				}
				object.addClick();
			}
		}
	}

	p.endSelectMode = function (object) {
		object.isSelected = false;
	}

	p.deleteObject = function (object) {
		if (object.isSelected) {
			object.isPlaced = false;
			object = null;
		}
	}

	//When getting data from the database
	p.initializeWindow = function(window) {
		if (window.isRotated) {
			p.windowFrame = new windowFrame(parseFloat(window.x), parseFloat(window.y), p, p.referenceWindowFrame.h, p.referenceWindowFrame.w);
			p.windowFrame.isPlaced = true;
			p.windowFrames.push(p.windowFrame);
		} else {
			p.windowFrame = new windowFrame(parseFloat(window.x), parseFloat(window.y), p, p.referenceWindowFrame.w, p.referenceWindowFrame.h);
			p.windowFrame.isPlaced = true;
			p.windowFrames.push(p.windowFrame);
		}
	}

	p.initializeWall = function(wall) {
		p.wall = new Wall(parseFloat(wall.x1), parseFloat(wall.y1), parseFloat(wall.x2), parseFloat(wall.y2), p);
		p.wall.isPlaced = true;
		p.walls.push(p.wall);
	}

	p.initializeDoor = function(door) {
		if (door.isRotated) {
			p.door = new Door(parseFloat(door.x), parseFloat(door.y), p.referenceDoor.w, p.referenceDoor.h, 0, p.HALF_PI, p);
			p.door.isPlaced = true;
			p.doors.push(p.door);
		} else {
			p.door = new Door(parseFloat(door.x), parseFloat(door.y), p.referenceDoor.w, p.referenceDoor.h, p.referenceDoor.start, p.referenceDoor.stop, p);
			p.door.isPlaced = true;
			p.doors.push(p.door);
		}
	}

	p.initializeLight = function(light) {
		p.light = new Light(parseFloat(light.x), parseFloat(light.y), p);
		p.light.name = light.name;
		p.light.topics = light.topics;
		p.light.password = light.password;
		p.light.isOn = light.on;
		p.light.isPlaced = true;
		p.lights.push(p.light);
	}

	p.getLastDevice = function () {
		let device = null;
		let created = 0;
		for (let i = 0; i < p.lights.length; i++) {
			if (p.lights[i].timeStamp > created) {
				created = p.lights[i].timeStamp;
				device = p.lights[i];
			}
		}

		return device;
	}

	p.cursorOverSquare = function (x, y, w, h) {
		if ( (p.mouseX > x) && (p.mouseX < (x + w)) && (p.mouseY > y) && (p.mouseY < (y + h)) ) {
			return true;
		} else {
			return false;
		}
	}

	p.cursorOverLine = function (x1, y1, x2, y2) {
		p.d1 = p.dist(p.mouseX, p.mouseY, x1, y1);
		p.d2 = p.dist(p.mouseX, p.mouseY, x2, y2);

		p.lineLength = p.dist(x1, y1, x2, y2);

		p.buffer = 0.1; // higher # = less accurate

		if( p.d1+p.d2 >= p.lineLength-p.buffer && p.d1+p.d2 <= p.lineLength+p.buffer) {
			return true;
		}
		return false;
	}

	p.getAngle = function() {
		p.baseVector = p.createVector(p.linePoints[0][0], p.linePoints[0][1]);
		p.mouseVector = p.createVector(p.mouseX-p.baseVector.x, p.mouseY-p.baseVector.y);
		//console.log(p.degrees(p.mouseVector.heading()).toFixed(2));
		p.angle = p.degrees(p.mouseVector.heading()).toFixed(2);

		if ( (p.angle <= 45 && p.angle >= -45) || (p.angle <= 180 && p.angle >= 135) || (p.angle <= -135 && p.angle >= -180) ) {
			//Straight line on the X axis
			return true;
			//p.line(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.mouseX, p.linePoints[p.linePoints.length-1][1]);
		} else {
			//Straight line on the Y axis
			return false;
			//p.line(p.linePoints[p.linePoints.length-1][0], p.linePoints[p.linePoints.length-1][1], p.linePoints[p.linePoints.length-1][0], p.mouseY);
		}

		//return p.angle;
	}

	p.saveBlueprintCanvas = function() {
		p.saveCanvas(blueprint.canvas, 'Dashboard', 'png');
	}

	p.handleFile = function(file) {
		console.log(file);
		if (file.type === 'image') {
			p.uploadedImg = p.createImg(file.data, '');
			p.uploadedImg.hide();
			p.imageSet = true;
		} else {
			p.uploadedImg = null;
		}
	}

	//Draw canvas borders
	p.borders = function() {
		p.stroke(0);
		p.strokeWeight(2);
		p.line(p.width*-1, p.height, p.width, p.height);
		p.line(p.width, p.height*-1, p.width, p.height);
		p.line(0,p.height*-1, 0, p.height);
		p.line(0, 0, p.width, 0);
	}

	p.mousePressed = function () {
		p.windowFrames.forEach(p.selectObject);
		p.walls.forEach(p.selectObject);
		p.doors.forEach(p.selectObject);
		p.lights.forEach(p.selectObject);

		// Draw rubber line only if clicked on canvas
		if (p.linerStatus && p.cursorOverSquare(0, 0, p.canvasWidth, p.canvasParams.h)) {
			if (p.linePoints.length == 2) {
				
				p.linePoints = [];
			}
			p.linePoints.push([p.mouseX, p.mouseY]);
		}
	}

}

let blueprint = new p5(blueprintTemplate);