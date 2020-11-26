class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
    this.image = loadImage("tennis.jpg");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    fill("black");
  }
}
