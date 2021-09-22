class SnowFlake {
    constructor(x,y,r){
        var options = {
            friction: 0.4,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("snowFlakeImg.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        }
    display(){
        var snowFlakePos = this.body.position;
        push();
        translate(snowFlakePos.x, snowFlakePos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
        pop();
    }
    reCenter(){
        if(this.body.y > 400){
            push()
            this.body.y = 0;
            pop()
        }
    }
}