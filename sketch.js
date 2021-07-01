var a,b; //variables

function setup() {
  createCanvas(800,400);
  a= createSprite(300, 200, 50, 50); //bigger
  b= createSprite(200, 200, 30, 30); //smaller
//50/2=25
//30/2=15
//15+25=40
  a.shapeColor = "green";
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255);  //white 
  a.x =World.mouseX;
  a.y = World.mouseY;
  console.log(a.x-b.x); //distance from screen will give distance between 2 boxes

  drawSprites();
  if(a.x-b.x <(a.width/2+b.width/2) && b.x-a.x <(a.width/2+b.width/2) && a.y-b.y<(a.height/2+b.height/2) && b.y-a.y<(a.height/2+b.height/2)){
    a.shapeColor = "red";
    b.shapeColor = "red";


  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";

  }
}