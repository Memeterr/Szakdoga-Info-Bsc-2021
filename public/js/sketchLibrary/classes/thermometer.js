class Thermometer {

    constructor(x, y, p5) {
        this.x = x;
		this.y = y;
        this.p5 = p5;

        this.w = 25;
		this.h = 25;

        this.tempValue = 10
        this.temp = this.tempValue + " °C";

        this.name = "";
		this.topics = "";
		this.password = "";
		this.type = "thermometer";

        this.isFollowing = false;
		this.isSelected = false;
		this.isPlaced = false;
		this.firstPlacedown = true;

		this.id = null;

		this.clickCount = 0;

		this.timeStamp = Date.now();
    }

    show() {
        this.p5.push();

        this.p5.image(this.p5.thermoImg, this.x, this.y, this.w, this.h);

        this.p5.textSize(10);
		this.p5.noStroke();

        if(this.isPlaced) {
            // Shows text next to icon
            this.p5.text(this.temp, this.x + this.w, this.y + this.h/2 + 1);
        }

        // Shows text under icon
        this.p5.text(this.name, this.x + this.w/2 - this.getTextWidth()/2, this.y + this.h + 12);

        this.p5.pop();
    }

    showSelected() {
		let correction = 4;

		this.p5.push();

		this.p5.image(this.p5.thermoImg, this.x, this.y, this.w, this.h);

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