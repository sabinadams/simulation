module.exports = class Bot { 

	constructor(x, y, name) {
	    this.x = x;
	    this.y = y;
	    this.name = name;
	}


	getLocation(){
		return { x: this.x, y: this.y };
	}

	setLocation(x, y){
		this.x = x;
		this.y = y;
	}

	getX(){
		return this.x;
	}

	getY(){
		return this.y;
	}

	getName(){
		return this.name;
	}
}