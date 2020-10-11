
var player;
var player_1;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52;
var prize;
var prize_1;
var ghost1,ghost2,ghost3,ghost4;
var ghost_1,ghost_2,ghost_3,ghost_4;
  

function preload() {
  

  player_1=loadImage("images/player.png");
  prize_1=loadImage("images/prize1.png");
  ghost_1=loadImage("images/ghost1.png");
  ghost_2=loadImage("images/ghost 2.png");
  ghost_3=loadImage("images/ghost 3.png");
  ghost_4=loadImage("images/ghost 4.png");

}

function setup() {
  
  createCanvas(700,1000);
  
  t1=createSprite(350,45,700,200);
  t1.shapeColor="black";

  t2=createSprite(55,203,115,115);
  t2.shapeColor="red";

  t3=createSprite(171,203,115,115);
  t3.shapeColor="skyblue";

  t4=createSprite(288,203,115,115);
  t4.shapeColor="pink";

  t5=createSprite(405,203,115,115);
  t5.shapeColor="lightgreen";

  t6=createSprite(522,203,115,115);
  t6.shapeColor="orange";

  t7=createSprite(640,203,115,115);
  t7.shapeColor="yellow";

  t8=createSprite(55,319,115,115);
  t8.shapeColor="purple";

  t9=createSprite(171,319,115,115);
  t9.shapeColor="white";

  t10=createSprite(288,319,115,115);
  t10.shapeColor="turquoise";

  t11=createSprite(405,319,115,115);
  t11.shapeColor="orange";

  t12=createSprite(522,319,115,115);
  t12.shapeColor="red";

  t13=createSprite(640,319,115,115);
  t13.shapeColor="skyblue";

  t14=createSprite(55,435,115,115);
  t14.shapeColor="pink";

  t15=createSprite(171,435,115,115);
  t15.shapeColor="lightgreen";

  t16=createSprite(288,435,115,115);
  t16.shapeColor="orange";

  t17=createSprite(405,435,115,115);
  t17.shapeColor="yellow";

  t18=createSprite(522,435,115,115);
  t18.shapeColor="purple";

  t19=createSprite(640,435,115,115);
  t19.shapeColor="white";

  t20=createSprite(55,551,115,115);
  t20.shapeColor="turquoise";

  t21=createSprite(171,551,115,115);
  t21.shapeColor="red";

  t22=createSprite(288,551,115,115);
  t22.shapeColor="purple";

  t23=createSprite(405,551,115,115);
  t23.shapeColor="skyblue";

  t24=createSprite(522,551,115,115);
  t24.shapeColor="pink";

  t25=createSprite(640,551,115,115);
  t25.shapeColor="lightgreen";

  t26=createSprite(55,667,115,115);
  t26.shapeColor="orange";

  t27=createSprite(171,667,115,115);
  t27.shapeColor="yellow";

  t28=createSprite(288,667,115,115);
  t28.shapeColor="purple";

  t29=createSprite(405,667,115,115);
  t29.shapeColor="white";

  t30=createSprite(522,667,115,115);
  t30.shapeColor="turquoise";

  t31=createSprite(640,667,115,115);
  t31.shapeColor="pink";

  t32=createSprite(55,783,115,115);
  t32.shapeColor="red";

  t33=createSprite(171,783,115,115);
  t33.shapeColor="skyblue";

  t34=createSprite(288,783,115,115);
  t34.shapeColor="pink";

  t35=createSprite(405,783,115,115);
  t35.shapeColor="lightgreen";

  t36=createSprite(522,783,115,115);
  t36.shapeColor="orange";

  t37=createSprite(640,783,115,115);
  t37.shapeColor="yellow";

  t38=createSprite(55,783,115,115);
  t38.shapeColor="purple";

  t39=createSprite(171,783,115,115);
  t39.shapeColor="white"; 

  t40=createSprite(55,87,115,115);
  t40.shapeColor="turquoise";

  t41=createSprite(171,87,115,115);
  t41.shapeColor="orange";

  t42=createSprite(288,87,115,115);
  t42.shapeColor="yellow";

  t43=createSprite(405,87,115,115);
  t43.shapeColor="pink";

  t44=createSprite(522,87,115,115);
  t44.shapeColor="lightgreen";

  t45=createSprite(640,87,115,115);
  t45.shapeColor="skyblue";

  t46=createSprite(55,899,115,115);
  t46.shapeColor="red";

  t47=createSprite(171,899,115,115);
  t47.shapeColor="skyblue";

  t48=createSprite(288,900,115,115);
  t48.shapeColor="lightgreen";

  t49=createSprite(405,900,115,115);
  t49.shapeColor="pink";

  t50=createSprite(522,900,115,115);
  t50.shapeColor="yellow";

  t51=createSprite(640,900,115,115);
  t51.shapeColor="orange";

  prize=createSprite(640,900,20,20);
  prize.addImage(prize_1);
  prize.scale=0.5;

  ghost1=createSprite(100,300,80,20,20);
  ghost1.addImage(ghost_1);
  ghost1.scale=0.19;

  ghost2=createSprite(640,783,80,20,20);
  ghost2.addImage(ghost_2);
  ghost2.scale=0.19;

  ghost3=createSprite(100,500,20,20);
  ghost3.addImage(ghost_3);
  ghost3.scale=0.19;

  ghost4=createSprite(640,600,20,20);
  ghost4.addImage(ghost_4);
  ghost4.scale=0.19;

  player=createSprite(55,85,20,20);
  player.addImage(player_1);
  player.scale=0.12;



}


function draw() {

  background(0); 

  ghost1.velocityX=-8;
  ghost1.velocityY=-9;

  ghost2.velocityX=-8;
  ghost2.velocityY=-9;

  ghost3.velocityX=-8;
  ghost3.velocityY=-9;

  ghost4.velocityX=-8;
  ghost4.velocityY=-9;

  player.x=World.mouseX;
  player.y=World.mouseY;  

  drawSprites();

}