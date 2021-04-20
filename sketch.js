const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var b,backgroundImage;
var gameState = "onRope"

function preload() {
  getInfo();
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,200,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600,70,70,70);
  box6 = new Box(600,50,70,70);
  box7 = new Box(670,100,70,70);
  box8 = new Box(740,100,70,70);
  box9 = new Box(810,100,70,70);
  box10 = new Box(880,100,70,70);
  box11 = new Box(670,90,70,70);
  box12 = new Box(670,80,70,70);
  box13 = new Box(670,70,70,70);
  box14 = new Box(670,60,70,70);
  box15  = new Box(670,50,70,70);





}

function draw() {
  if(backgroundImage){
    background(backgroundImage);
  }
  else{
    background("white");
  }

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();



  hero.display();
  rope.display();
  monster.display();
getInfo();
}
function mouseDragged(){
  if(gameState==="onRope"){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }
 
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(hero.body);
  }
}
async function getInfo(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour>=6 && hour<=17){
    b = "gamingbackground2.png"
  }
  else if(hour>=17 && hour<=00){
    b = "gamingbackground1.jpg"
  }
backgroundImage = loadImage(b)


}
