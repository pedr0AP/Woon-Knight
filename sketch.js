const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var PLAY = 1;
var END = 0;

var Bplay = 1;
var Attack = 0;

var gameState = PLAY;

var player;
var obstaculosgroup;
var desafios;
var chao,chao2;
var inimigos_img, chefao_img;


function preload(){
  
  inimigos_img = loadImage("boladefogo.png");
  chefao_img = loadImage("chefao.png")
}


function setup() {
  
  
  createCanvas(1360, 600);


  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution: 0,
    frictionAir: 0
   }
   var optionschao = {
  isStatic: true
   }
  player = createSprite(10, 10, 20, 10);
  //World.add(world, player); 
  //desafios = new Desafios (10, 180, 10, 2);
  chao = createSprite(0, 600, 2800, 100)
  chao2 = createSprite(0, 0, 2800, 100)
  chao2.visible = false;

  obstaculosgroup = new Group();
  //World.add(world, chao);

  rectMode(CENTER)
 
}

function draw() {
    background(220);
    
    Engine.update(engine);
   // desafios.display();
    //chao.show();
    //rect(chao.position.x, chao.position.y, 2800, 100);
   
    //rect(player.position.x, player.position.y, 20, 10);
  
  if (gameState === PLAY){
    if (keyDown("left")) {
      player.position.x = player.position.x - 2
    }
    
    if(keyDown("right")){
      player.position.x = player.position.x + 5
    }
    if(keyDown("down" )){
      player.position.y = player.position.y + 2
    }
    if(keyDown("space")  && player.y >= 530){
      player.velocityY = - 15
    }
    
    if (obstaculosgroup.isTouching(player)) {
      gameState = END
  }
  }
     player.velocityY = player.velocityY + 0.8;
if (gameState === END){
  player.velocityX = -2;
  if (keyDown("left")) {
    player.position.x = player.position.x - 2
  }
  
  if(keyDown("right")){
    player.position.x = player.position.x + 5
  }
  if(keyDown("down" )){
    player.position.y = player.position.y + 2
  }
  if(keyDown("space") && player.y > 200 ){
    player.velocityY = - 15
  }

}

  

     player.collide(chao2);
     player.collide(chao);
     
     randomize(); 
   

     player.collide(obstaculosgroup);
    boss();
   drawSprites();

}
function randomize(){

  if(frameCount % 60 === 0){
 // obstaculos = Bodies.rectangle(10, 200, 100, 20); 
 // var obstaculos = Bodies.rectangle(10, 200, 100, 20);
   
    var obstaculos = createSprite(10, 200, 100, 20);
    obstaculos.x = 1370;
    obstaculos.y = Math.round(random(50, 600));

    obstaculos.velocityX = - 2;
   

    obstaculos.lifetime = 600;
 obstaculosgroup.add(obstaculos);
 }

}

function boss(){
 var chefao = createSprite(100,450, 50 ,100);
 chefao.addImage(chefao_img);
 chefao.scale = 0.30
/*  if (player.x > 500){
    var fireball = createSprite(0, 500, 50, 50)
    fireball.velocityX = 5;
    fireball.velocityY = 5;
  }
  if (fireball.isTouching(chao)){
     fireball.velocityY = -5;
  }
  if(fireball.isTouching(chao2)){
    firebsll.velocityY = 5;
  }

  

  
/*if(player.isTouching(obstaculosgroup)){
  for (var i = 0; i < 1; i++) {
    
    var inimigos = createSprite(0, 500, 10, 10);
    inimigos.velocityX = 5;
    inimigos.lifetime = 50;
    inimigos.addImage(inimigos_img);


}
}*/


}


//function collide(body,sprite)
//{
 /* if(body != null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
             // World.remove(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              return false;
            }
         }
}*/
