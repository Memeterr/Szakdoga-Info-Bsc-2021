class door {

	constructor(x, y, w, h, start, stop, p5) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.start = start;
		this.stop = stop;
		this.p5 = p5;

		this.isFollowing = false;
		this.isSelected = false;
		this.isPlaced = false;
		this.isRotated = false;
		this.firstPlacedown = true;

		this.clickCount = 0;

		this.timeStamp = Date.now();
	}

	show() {
		this.p5.push();
		this.p5.strokeWeight(2);
		this.p5.stroke(255);
		this.p5.fill(blueprint.bcolor);
		this.p5.arc(this.x, this.y, this.w, this.h, this.start, this.stop, this.p5.PIE);
		//this.p5.line(this.x, this.y, this.x, this.h/10*3);
		//this.p5.line(this.x, this.y, this.w+(this.w/2), this.y);
		//TODO dotted lines at the bottom
		this.p5.pop();
	}

	showSelected() {
		this.p5.push();
		this.p5.strokeWeight(2);
		this.p5.stroke(255);
		this.p5.fill(160, 0, 0);
		this.p5.arc(this.x, this.y, this.w, this.h, this.start, this.stop, this.p5.PIE);
		this.p5.pop();
	}

	rotate() {

	}

	addClick() {
		this.clickCount++;
	}
	
}