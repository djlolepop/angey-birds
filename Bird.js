class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.tj = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos = [this.body.position.x,this.body.position.y]
    this.tj.push(pos);
if (this.body.position.x>200&&this.body.velocity.x>10) {
	for (var i = 0; i <this.tj.length ; i++) {
image(this.smokeimg,this.tj[i][0],this.tj[i][1])
}
  
  }
  super.display();
}}
