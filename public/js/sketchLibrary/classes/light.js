class Light {

	constructor(x, y, p5) {
		this.x = x;
		this.y = y;
		this.w = 25;
		this.h = 25;
		this.p5 = p5;

		this.name = "";
		this.topics = "";
		this.password = "";
		this.type = "light";
		this.isOn = false;

		this.isFollowing = false;
		this.isSelected = false;
		this.isPlaced = false;
		this.firstPlacedown = true;

		this.clickCount = 0;

		this.timeStamp = Date.now();

		//this.img = null;
	}

	show() {
		if(this.isOn) {
			this.showOn();
		} else {
			this.showOff();
		}
	}

	showOn() {
		this.p5.push();

		this.p5.image(this.p5.lightOnImg, this.x, this.y, this.w, this.h);

		this.p5.textSize(10);
		this.p5.noStroke();
		this.p5.text(this.name, this.x + this.w/2 - this.getTextWidth()/2, this.y + this.h + 12);

		this.p5.pop();
		//this.img = tools.lightOnIcon;
		//tools.lightOnIcon.loadPixels();
		//this.p5.image(this.img, this.x, this.y, this.w, this.h);
	}

	showOff() {
		this.p5.push();

		this.p5.image(this.p5.lightOffImg, this.x, this.y, this.w, this.h);

		this.p5.textSize(10);
		this.p5.noStroke();
		this.p5.text(this.name, this.x + this.w/2 - this.getTextWidth()/2, this.y + this.h + 12);

		this.p5.pop();
		//this.img = tools.lightOffIcon;
		//tools.lightOffIcon.loadPixels();
		//this.p5.image(this.img, this.x, this.y, this.w, this.h);
	}

	showSelected() {
		let correction = 4;

		this.p5.push();

		if(this.isOn) {
			this.p5.image(this.p5.lightOnImg, this.x, this.y, this.w, this.h);
		} else {
			this.p5.image(this.p5.lightOffImg, this.x, this.y, this.w, this.h);
		}

		this.p5.noFill();
		this.p5.stroke(160, 0, 0);
		this.p5.strokeWeight(1);
		this.p5.rect(this.x - correction/2, this.y - correction/2, this.w + correction, this.h + correction);

		this.p5.textSize(12);
		this.p5.fill(160, 0, 0);
		this.p5.text(this.name, this.x + this.w/2 - this.getTextWidth()/2, this.y + this.h + 12);

		this.p5.pop();
	}

	addClick() {
		this.clickCount++;
	}

	getTextWidth() {
		let width = this.p5.textWidth(this.name);

		return width;
	}

}