class light {

	constructor(x, y, p5) {
		this.x = x;
		this.y = y;
		this.w = 35;
		this.h = 35;

		this.p5 = p5;

		this.img = null;
	}

	showOn() {
		this.img = tools.lightOnIcon;
		tools.lightOnIcon.loadPixels();
		this.p5.image(this.img, this.x, this.y, this.w, this.h);
	}

	showOff() {
		this.img = tools.lightOffIcon;
		tools.lightOffIcon.loadPixels();
		this.p5.image(this.img, this.x, this.y, this.w, this.h);
	}

}