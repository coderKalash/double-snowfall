const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var snow1=[]
var snow=[]

function preload(){
 bg= loadImage("snow1.jpg")
 

}
function setup() {
  createCanvas(1200,400);
engine=Engine.create()
world=engine.world
  
}

function draw() {
  background(bg);
  Engine.update(engine)
  if(frameCount%5===0){
    snow.push(new Snowfall(random(1,600),10,30))
  }  
  for(var i=0;i<snow.length;i++){
    snow[i].display()
  }
  if(frameCount%5===0){
    snow1.push(new Snowfall1(random(600,1200),10,30))
  }  
  for(var i=0;i<snow.length;i++){
    snow1[i].display()
  }
  drawSprites();
}