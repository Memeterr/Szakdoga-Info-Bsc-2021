class windowFrame {

	constructor(x, y, p5, w=10, h=40) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
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
		this.p5.rect(this.x, this.y, this.w, this.h, 5);
		this.p5.pop();
	}

	showSelected() {
		this.p5.push();
		this.p5.strokeWeight(2);
		this.p5.stroke(255);
		this.p5.fill(160, 0, 0);
		this.p5.rect(this.x, this.y, this.w, this.h, 5);
		this.p5.pop();
	}

	addClick() {
		this.clickCount++;
	}

	//hover(px, py) {
	//	if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
	//		console.log("hovered over rect");
	//	}
	//}


}

