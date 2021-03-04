
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy;
var stone;
var sling;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1450,200,30);
	mango3=new mango(1150,100,30);
	mango4=new mango(1000,260,30);
	mango5=new mango(970,65,30);
	mango6=new mango(910,220,30);
	mango7=new mango(1350,300,30);
	mango8=new mango(1060,190,30);
	mango9=new mango(1200,250,30);
	mango10=new mango(1250,210,30);
	mango11=new mango(980,150,30);
	mango12=new mango(1040,85,30);
	mango13=new mango(1170,175,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone=new Stone(220,400,20,20);

	sling=new Chain(stone.body,{x:240,y:420});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  

  groundObject.display();
  stone.display();
  
sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly();
}
