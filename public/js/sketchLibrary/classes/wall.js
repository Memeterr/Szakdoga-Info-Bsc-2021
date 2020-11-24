class wall {

	constructor(x1, y1, x2, y2, p5) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.p5 = p5;

		this.isSelected = false;
		this.isPlaced = false;

		this.clickCount = 0;

		this.timeStamp = Date.now();
	}

	show() {
		this.p5.push();
		this.p5.strokeWeight(6);
		this.p5.stroke(255);
		this.p5.line(this.x1, this.y1, this.x2, this.y2);
		this.p5.pop();
	}

	showSelected() {
		this.p5.push();
		this.p5.strokeWeight(6);
		this.p5.stroke(160, 0, 0);
		this.p5.line(this.x1, this.y1, this.x2, this.y2);
		this.p5.pop();
	}

	addClick() {
		this.clickCount++;
	}

}