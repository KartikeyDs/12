//Ryuk Theme c;
//Ryuk Theme b;
//Light's b; 

var gameState = 0;
var score = 0;
//Home page
var bg_home, bg_home_Img;
var start_btn, start_btn_Img;
//Story
var storm_, storm_Img;
var island_, island_Img;
//Story objetcs
var ob_1;
var ob_2;
//Story(Storm) Sound effect
var storm_so
//Timer 
var timer = 0;

//Game objects:-
var bricks_1, bricks_1_Img;
var bricks_2;
var bricks_3;
var bricks_4;
var bricks_5;
var bricks_6;
var bricks_7;
var bricks_8;
var bricks_9;
var bricks_10;
var bricks_11;
var bricks_12;
var bricks_13;
var bricks_14;
var bricks_15;
var bricks_16;
var bricks_17;
var bricks_18;
var bricks_19;
var bricks_20;
var bricks_21;
var bricks_22;
var bricks_23;
var bricks_24;
var bricks_25;
var invisobj;
var invisible_gr;
var spikes,spikes2, spikes3,spikes4,spikes5,spikes6,spikes7, spikes_Img;
var question_b, question_b_Img;
var lava, lava2, lava3, lava4, lava5, lava_Img;
var brick_1,brick_2, brick_3,brick_4,brick_5,brick_6,brick_7,brick_8,brick_9,brick_10,brick_11,brick_12,brick_Img;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin_Img;
var coin_s;
//Mobs:     -
var jin_a, jin_a_Img;
var bomb_,bomb_1,bomb_2, bomb_Img;
var mob_,mob_1, mob_Img;
var jin_l, l;
var jin_d, d;
var jin_x, x;
var jin_y, y;
var jin_c, c;

//Backgrounds:-
var bg,bg_Img;
var bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19,bg20,bg21,bg2_Img;

function preload() {

//Story Sounds:-
storm_so = loadSound("/Sound/storm_s.mp3");

//Buttons:-
start_btn_Img = loadImage("/Buttons/e.png");

//Backgrounds:-
bg_Img = loadImage("/Backgrounds/b1.png");
bg2_Img = loadImage("/Backgrounds/b2.JPG ")

//Images:-
bricks_1_Img = loadImage("/level/Bricks.png");
spikes_Img = loadImage("/level/Spikes.png");
lava_Img = loadImage("/level/Lava.png")
brick_Img = loadImage("/level/Brick.png");
d = loadImage("/Hero g/h_0.png");

//Animations:-

bg_home_Img = loadAnimation("/Home/_0.png","/Home/_1.png","/Home/_2.png","/Home/_3.png","/Home/_4.png","/Home/_5.png","/Home/_6.png","/Home/_7.png","/Home/_8.png","/Home/_9.png","/Home/_10.png","/Home/_11.png","/Home/_12.png");
//storm_Img = loadAnimation("/Story/0.png ", "/Story/1.png","/Story/2.png", "/Story/3.png", "/Story/4.png", "/Story/5.png", "/Story/6.png", "/Story/7.png", "/Story/8.png", "/Story/9.png", "/Story/10.png", "/Story/11.png", "/Story/12.png", "/Story/13.png", "/Story/14.png", "/Story/15.png", "/Story/16.png", "/Story/17.png", "/Story/18.png", "/Story/19.png", "/Story/20.png", "/Story/21.png", "/Story/22.png", "/Story/23.png", "/Story/24.png", "/Story/25.png", "/Story/26.png", "/Story/27.png", "/Story/28.png", "/Story/29.png", "/Story/30.png", "/Story/31.png", "/Story/32.png", "/Story/33.png", "/Story/34.png", "/Story/35.png");
//island_Img = loadAnimation("/Story/36.png", "/Story/37.png", "/Story/38.png", "/Story/39.png", "/Story/40.png", "/Story/41.png", "/Story/42.png", "/Story/43.png", "/Story/44.png", "/Story/45.png", "/Story/46.png", "/Story/47.png", "/Story/48.png", "/Story/49.png")
jin_a_Img = loadAnimation("/Hero a/a_0.png","/Hero a/a_1.png","/Hero a/a_2.png","/Hero a/a_3.png","/Hero a/a_4.png","/Hero a/a_5.png","/Hero a/a_6.png","/Hero a/a_7.png","/Hero a/a_8.png","/Hero a/a_9.png",)
l = loadAnimation("/Hero a_l/a_0_l.png","/Hero a_l/a_1_l.png","/Hero a_l/a_2_l.png","/Hero a_l/a_3_l.png","/Hero a_l/a_4_l.png","/Hero a_l/a_5_l.png","/Hero a_l/a_6_l.png","/Hero a_l/a_7_l.png","/Hero a_l/a_8_l.png","/Hero a_l/a_9_l.png")
bomb_Img = loadAnimation("/Bomb/b_1.png","/Bomb/b_2.png","/Bomb/b_3.png","/Bomb/b_4.png","/Bomb/b_5.png","/Bomb/b_6.png","/Bomb/b_7.png","/Bomb/b_8.png","/Bomb/b_9.png","/Bomb/b_10.png","/Bomb/b_11.png","/Bomb/b_12.png",)
question_b_Img = loadAnimation("/question box/q_0.png","/question box/q_1.png","/question box/q_2.png","/question box/q_3.png")
mob_Img = loadAnimation("/Mob/m_1.png","/Mob/m_2.png","/Mob/m_3.png","/Mob/m_4.png","/Mob/m_5.png","/Mob/m_6.png","/Mob/m_7.png","/Mob/m_8.png",)
x = loadAnimation("/Hero b/b_0.png","/Hero b/b_1.png","/Hero b/b_2.png","/Hero b/b_3.png","/Hero b/b_4.png","/Hero b/b_5.png","/Hero b/b_6.png","/Hero b/b_7.png","/Hero b/b_8.png","/Hero b/b_9.png","/Hero b/b_10.png","/Hero b/b_11.png","/Hero b/b_12.png","/Hero b/b_13.png","/Hero b/b_14.png","/Hero b/b_15.png","/Hero b/b_16.png",)
//y = loadAnimation("/Hero c/c_0.png","/Hero c/c_1","/Hero c/c_2","/Hero c/c_3  ","/Hero c/c_4","/Hero c/c_5","/Hero c/c_6","/Hero c/c_7","/Hero c/c_8","/Hero c/c_9","/Hero c/c_10","/Hero c/c_11","/Hero c/c_12","/Hero c/c_13","/Hero c/c_14","/Hero c/c_15","/Hero c/c_16",)
coin_Img = loadAnimation("/coin/co_0.png","/coin/co_1.png","/coin/co_2.png","/coin/co_3.png","/coin/co_4.png","/coin/co_5.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg11 = createSprite(displayWidth+2700, displayHeight-420);
  bg11.addImage("bg2_",bg2_Img);
  bg11.visible = false;

  bg10 = createSprite(displayWidth+2700, displayHeight-420);
  bg10.addImage("bg2_",bg2_Img);
  bg10.visible = false;

  bg9 = createSprite(displayWidth+7500, displayHeight-420);
  bg9.addImage("bg2_",bg2_Img);
  bg9.visible = false;
  
  bg8 = createSprite(displayWidth+6300, displayHeight-420);
  bg8.addImage("bg2_",bg2_Img);
  bg8.visible = false;
  
  bg7 = createSprite(displayWidth+5100, displayHeight-420);
  bg7.addImage("bg2_",bg2_Img);
  bg7.visible = false;

  bg6 = createSprite(displayWidth+3900, displayHeight-420);
  bg6.addImage("bg2_",bg2_Img);
  bg6.visible = false;

  bg5 = createSprite(displayWidth+2700, displayHeight-420);
  bg5.addImage("bg2_",bg2_Img);
  bg5.visible = false;

  bg4 = createSprite(displayWidth+1500, displayHeight-420);
  bg4.addImage("bg2_",bg2_Img);
  bg4.visible = false;

  bg3 = createSprite(displayWidth+300, displayHeight-420);
  bg3.addImage("bg2_",bg2_Img);
  bg3.visible = false;

  bg2 = createSprite(displayWidth-930, displayHeight-420);
  bg2.addImage("bg2_",bg2_Img);
  bg2.visible = false;

  question_b = createSprite(displayWidth+7900, displayHeight-570,0,0);
  question_b.scale = 0.27
  question_b.addAnimation("q_b", question_b_Img);
 // question_b.debug = true;
  question_b.setCollider("rectangle", 0,0,400, 400)

  coin_s = createSprite(0, displayHeight-735);
  coin_s.scale = 0.4;
  coin_s.addAnimation("s", coin_Img);
  coin_s.visible = false;
  
  coin1 = createSprite(displayWidth-1400, displayHeight-500);
  coin1.scale = 0.4;
  coin1.addAnimation("c", coin_Img);

  coin2 = createSprite(displayWidth+170, displayHeight-400);
  coin2.scale = 0.4;
  coin2.addAnimation("c", coin_Img);

  coin3 = createSprite(displayWidth+230, displayHeight-400);
  coin3.scale = 0.4;
  coin3.addAnimation("c", coin_Img);

  coin4 = createSprite(displayWidth+640, displayHeight-200);
  coin4.scale = 0.4
  coin4.addAnimation("c", coin_Img);

  coin5 = createSprite(displayWidth+720, displayHeight-200);
  coin5.scale = 0.4
  coin5.addAnimation("c", coin_Img);

  coin6 = createSprite(displayWidth+800, displayHeight-200);
  coin6.scale = 0.4
  coin6.addAnimation("c", coin_Img);

  coin7 = createSprite(displayWidth+1252, displayHeight-340);
  coin7.scale = 0.4
  coin7.addAnimation("c", coin_Img);

  coin8 = createSprite(displayWidth+2400, displayHeight-200);
  coin8.scale = 0.4
  coin8.addAnimation("c", coin_Img);

  coin9 = createSprite(displayWidth+2460, displayHeight-200);
  coin9.scale = 0.4
  coin9.addAnimation("c", coin_Img);
  
  coin10 = createSprite(displayWidth+3520, displayHeight-460);
  coin10.scale = 0.4
  coin10.addAnimation("c", coin_Img);

  coin11 = createSprite(displayWidth+4220, displayHeight-530);
  coin11.scale = 0.4
  coin11.addAnimation("c", coin_Img);

  coin12 = createSprite(displayWidth+4220, displayHeight-590);
  coin12.scale = 0.4
  coin12.addAnimation("c", coin_Img);

  coin13 = createSprite(displayWidth+5550, displayHeight-340);
  coin13.scale = 0.4
  coin13.addAnimation("c", coin_Img);


  start_btn = createSprite(displayWidth-750, displayHeight-743,0,0);
  start_btn.addImage("btn1", start_btn_Img);
  start_btn.scale = 0.4;

  bg_home = createSprite(displayWidth-1400, displayHeight-430, 0, 0);
  bg_home.addAnimation("home",bg_home_Img);
  bg_home.scale = 2.75;

  bg_home.depth = start_btn.depth;
  start_btn.depth = start_btn.depth+1;

/*  jin_y = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_y.scale = 0.65
  jin_y.addImage("l", y);
  jin_y.visible = false;
  //jin_d.debug = true;
  jin_y.setCollider("circle", 0,0,185);*/

  bomb_ = createSprite(displayWidth-600, displayHeight-200,0,0);
  bomb_.scale = 0.4
  bomb_.addAnimation("b_", bomb_Img);
  bomb_.velocityX = -2;
  bomb_.velocityY = -4
  bomb_.visible = false;
 // bomb_.debug = true;
  bomb_.setCollider("circle",0,0,100);
  

  bomb_1 = createSprite(displayWidth-500, displayHeight-400,0,0);
  bomb_1.scale = 0.4
  bomb_1.addAnimation("b_", bomb_Img);
  bomb_1.velocityX = -2;
  bomb_1.velocityY = -4
  bomb_1.visible = false;
  bomb_1.setCollider("circle",0,0,100);

  bomb_2 = createSprite(displayWidth+3000, displayHeight-200,0,0);
  bomb_2.scale = 0.4
  bomb_2.addAnimation("b_", bomb_Img);
  bomb_2.velocityX = -2;
  bomb_2.velocityY = -4
  bomb_2.visible = false
  bomb_2.setCollider("circle",0,0,100);

  jin_x = createSprite(displayWidth-1400,displayHeight-310,100,40)
  jin_x.scale = 0.65
  jin_x.addAnimation("l", x);
  jin_x.visible = false;
  //jin_x.debug = true;
  jin_x.setCollider("rectangle", 0,0,300,400);

  jin_d = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_d.scale = 0.65
  jin_d.addImage("l", d);
  jin_d.visible = false;
 // jin_d.debug = true;
  jin_d.setCollider("circle", 0,0,185);

  jin_l = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_l.scale = 0.7
  jin_l.addAnimation("l", l);
  jin_l.visible = false;
  jin_l.setCollider("circle", 0,0,150);

  jin_a = createSprite(displayWidth-1400,displayHeight-300,50,40);
  jin_a.scale = 0.7;
  jin_a.addAnimation("j_a", jin_a_Img);
  jin_a.visible = false;
   //jin_a.debug = true;
  jin_a.setCollider("circle", 0,0,150);

  brick_11 = createSprite(displayWidth+5920, displayHeight-280,100,100);
  brick_11.scale = 0.15
  brick_11.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_11.setCollider("rectangle",0,0,500,500);
  brick_11.visible = false;

  brick_10 = createSprite(displayWidth+5550, displayHeight-280,100,100);
  brick_10.scale = 0.15
  brick_10.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_10.setCollider("rectangle",0,0,500,500);
  brick_10.visible = false;

  brick_9 = createSprite(displayWidth+5180, displayHeight-170,100,100);
  brick_9.scale = 0.15
  brick_9.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_9.setCollider("rectangle",0,0,500,500);
  brick_9.visible = false;

  brick_8 = createSprite(displayWidth+4860, displayHeight-170,100,100);
  brick_8.scale = 0.15
  brick_8.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_8.setCollider("rectangle",0,0,500,500);
  brick_8.visible = false;

  brick_7 = createSprite(displayWidth+4540, displayHeight-170,100,100);
  brick_7.scale = 0.15
  brick_7.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_7.setCollider("rectangle",0,0,500,500);
  brick_7.visible = false;

  brick_6 = createSprite(displayWidth+4220, displayHeight-420,100,100);
  brick_6.scale = 0.15
  brick_6.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_6.setCollider("rectangle",0,0,500,500);
  brick_6.visible = false;

  brick_5 = createSprite(displayWidth+3840, displayHeight-200,100,100);
  brick_5.scale = 0.15
  brick_5.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_5.setCollider("rectangle",0,0,500,500);
  brick_5.visible = false;

  brick_4 = createSprite(displayWidth+3520, displayHeight-400,100,100);
  brick_4.scale = 0.15
  brick_4.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_4.setCollider("rectangle",0,0,500,500);
  brick_4.visible = false;

  brick_1 = createSprite(displayWidth+1252, displayHeight-280,100,100);
  brick_1.scale = 0.15
  brick_1.addImage("b", brick_Img)
  //brick_1.debug = true;
  brick_1.setCollider("rectangle",0,0,500,500);
  brick_1.visible = false;

  brick_2 = createSprite(displayWidth+1452, displayHeight-170,100,100);
  brick_2.scale = 0.15
  brick_2.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_2.setCollider("rectangle",0,0,500,500);
  brick_2.visible = false;

  brick_3 = createSprite(displayWidth+3200, displayHeight-280,100,100);
  brick_3.scale = 0.15
  brick_3.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_3.setCollider("rectangle",0,0,500,500);
  brick_3.visible = false;

  spikes3 = createSprite(displayWidth+4220,displayHeight-480,30,30)
  spikes3.scale = 1;
  spikes3.addImage("s_", spikes_Img);
  spikes3.visible = false;

  spikes7 = createSprite(displayWidth+4540,displayHeight-230,30,30)
  spikes7.scale = 1;
  spikes7.addImage("s_", spikes_Img);
  spikes7.visible = false;

  spikes5 = createSprite(displayWidth+4860,displayHeight-230,30,30)
  spikes5.scale = 1;
  spikes5.addImage("s_", spikes_Img);
  spikes5.visible = false;

  spikes6 = createSprite(displayWidth+5180,displayHeight-230,30,30)
  spikes6.scale = 1;
  spikes6.addImage("s_", spikes_Img);
  spikes6.visible = false;
  
  invisible_gr = createSprite(displayHeight-100,displayHeight-135,100000,50);
  invisible_gr.visible = false;

}

function draw() {
  background(0);  

 console.log(jin_a.y);
 console.log(bomb_.y);

  camera.position.x=jin_a.x
  camera.position.y=displayHeight/2.4

  if(bomb_.y<=350){
  bomb_.velocityY = 4
  }

  if(bomb_.isTouching(invisible_gr)){
  bomb_.velocityY = -4
  }

  if(bomb_1.y<=350){
    bomb_1.velocityY = 4
    }
  
  if(bomb_1.isTouching(invisible_gr)){
     bomb_1.velocityY = -4
    }

    if(bomb_2.y<=350){
      bomb_2.velocityY = 4
      }

  if(bomb_2.isTouching(invisible_gr)){
    bomb_2.velocityY = -4
    }

    if(mousePressedOver(start_btn)){
    
    startButton();
  }

    if(keyWentDown("UP_ARROW")&&jin_a.y>=450){
    
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
    
  }
    if(keyWentDown("UP_ARROW")&&jin_a.x>4600&&jin_a.y>=347&&jin_a.x<5640){
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
  }

   if(keyWentDown("UP_ARROW")&&jin_a.x>6800&&jin_a.y>=347&&jin_a.x<7200){
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
   }

    if(keyDown("RIGHT_ARROW")){
    jin_a.visible = true;
    jin_a.x = jin_a.x+10;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")){
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_a.x = jin_a.x-10;
    jin_l.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }
 
  if(keyWentDown("DOWN_ARROW")){
    jin_a.visible = false;
    jin_l.velocityX = 0;
    jin_a.velocityX = 0;
    jin_l.visible = false;
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_d.visible = true;
    jin_x.visible = false;

  }

  if(keyWentDown("LEFT_ARROW")&&keyWentDown("UP_ARROW")){
  jin_l.visible = true;
  jin_a.visible = false;
  jin_d.visible = false;
  jin_x.visible = false;
  
  }

  if(keyWentDown("RIGHT_ARROW")&&keyWentDown("UP_ARROW")){
    jin_a.visible = true;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    }

  if(keyCode===122&&jin_a.x>9200){
    jin_x.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_l.visible = false;
    jin_a.velocityX = 0;
    }

  jin_l.velocityY = jin_l.velocityY + 0.8;
  jin_a.velocityY = jin_a.velocityY + 0.8;
  jin_d.velocityY = jin_d.velocityY + 0.8;

  if(jin_a.isTouching(spikes3)||jin_l.isTouching(spikes3)||jin_d.isTouching(spikes3)||jin_x.isTouching(spikes3)){
  spikes3.visible = false;
  }

  if(jin_a.isTouching(spikes7)||jin_l.isTouching(spikes7)||jin_d.isTouching(spikes7)||jin_x.isTouching(spikes7)){
    spikes7.visible = false;
    }

  if(jin_a.isTouching(spikes5)||jin_l.isTouching(spikes5)||jin_d.isTouching(spikes5)||jin_x.isTouching(spikes5)){
    spikes5.visible = false;
    }

  if(jin_a.isTouching(spikes6)||jin_l.isTouching(spikes6)||jin_d.isTouching(spikes6)||jin_x.isTouching(spikes6)){
    spikes6.visible = false;
    }

  if(jin_a.isTouching(coin1)){
    score = score+1;
    coin1.destroy();
  }

  if(jin_a.isTouching(coin2)){
    score = score+1;
    coin2.destroy();
  }

  if(jin_a.isTouching(coin3)){
    score = score+1;
    coin3.destroy();
  }

  if(jin_a.isTouching(coin4)){
    score = score+1;
    coin4.destroy();
  }

  if(jin_a.isTouching(coin5)){
    score = score+1;
    coin5.destroy();
  }

  if(jin_a.isTouching(coin6)){
    score = score+1;
    coin6.destroy();
  }

  if(jin_a.isTouching(coin7)){
    score = score+1;
    coin7.destroy();
  }

  if(jin_a.isTouching(coin8)){
    score = score+1;
    coin8.destroy();
  }

  if(jin_a.isTouching(coin9)){
    score = score+1;
    coin9.destroy();
  }

  if(jin_a.isTouching(coin10)){
    score = score+1;
    coin10.destroy();
  }

  if(jin_a.isTouching(coin11)){
    score = score+1;
    coin11.destroy();
  }

  if(jin_a.isTouching(coin12)){
    score = score+1;
    coin12.destroy();
  }

  if(jin_a.isTouching(coin13)){
    score = score+1;
    coin13.destroy();
  }

  if(jin_a.isTouching(brick_11)){
  brick_11.velocityX = 8;
  }

  if(brick_11.x>9200){
  brick_11.destroy();
  }

  /*if(jin_a.isTouching(question_b)){
    textFont("Georgia");
    fill("white")
    textSize(25)
    text("Press z to attack", displayWidth-9200,displayHeight-720);
  }*/

  if(jin_a.x>7200&&jin_a.x<9200){
  jin_a.x = brick_11.x;
  jin_d.x = jin_d.x-80
  jin_d.visible = true;
  jin_a.visible = false;
  jin_x.visible = false;
  jin_l.visible = false;
  }

  if(jin_a.isTouching(question_b)){
   gameState = 2;
  }

  jin_d.collide(brick_1);
  jin_d.collide(brick_2);
  jin_d.collide(brick_3);
  jin_d.collide(brick_4);
  jin_d.collide(brick_5);
  jin_d.collide(brick_6);
  jin_d.collide(brick_7);
  jin_d.collide(brick_8);
  jin_d.collide(brick_9);
  jin_d.collide(brick_10);
  jin_d.collide(brick_11);
  /*jin_d.collide(brick_3);
  jin_d.collide(brick_3);
  jin_d.collide(brick_3);*/
  jin_d.collide(invisible_gr);

  jin_a.collide(brick_1);
  jin_a.collide(brick_2);
  jin_a.collide(brick_3);
  jin_a.collide(brick_4);
  jin_a.collide(brick_5);
  jin_a.collide(brick_6);
  jin_a.collide(brick_7);
  jin_a.collide(brick_8);
  jin_a.collide(brick_9);
  jin_a.collide(brick_10);
  jin_a.collide(brick_11);
  jin_a.collide(invisible_gr);

  jin_l.collide(brick_1);
  jin_l.collide(brick_2);
  jin_l.collide(brick_3);
  jin_l.collide(brick_4);
  jin_l.collide(brick_5);
  jin_l.collide(brick_6);
  jin_l.collide(brick_7);
  jin_l.collide(brick_8);
  jin_l.collide(brick_9);
  jin_l.collide(brick_10);
  jin_l.collide(brick_11);
  jin_l.collide(invisible_gr);

  jin_x.collide(brick_1);
  jin_x.collide(brick_2);
  jin_x.collide(brick_3);
  jin_x.collide(brick_4);
  jin_x.collide(brick_5);
  jin_x.collide(brick_6);
  jin_x.collide(brick_7);
  jin_x.collide(brick_8);
  jin_x.collide(brick_9);
  jin_x.collide(brick_10);
  jin_x.collide(brick_11);
  jin_x.collide(invisible_gr);

  jin_l.x = jin_a.x;
  jin_l.y = jin_a.y;
  jin_d.x = jin_a.x;
  jin_d.y = jin_a.y;
  jin_x.x = jin_a.x;
  jin_x.y = jin_a.y-45; 
  coin_s.x = jin_a.x+470
  drawSprites();

  if(gameState === 0){
    strokeWeight(3)
    stroke("white")
    fill("black");
    textSize(50);
    
    text("The Lost Fortress", displayWidth-1580,displayHeight-730)
    }

  if(gameState === 1) {
    textFont("Georgia");
    fill("white")
    textSize(20)
    text("1) Hit the mistery box", jin_a.x-650,displayHeight-700);
    text("2) Collect coins to get hint for treasure", jin_a.x-650, displayHeight-670);
    textSize(30)
    text("Objectives :-", jin_a.x-650,displayHeight-730);
    textSize(70);
    text(": " + score, jin_a.x+520,displayHeight-720);
    
  } 

  if(gameState === 2){
    textFont("Georgia");
    fill("white")
    textSize(25);
    text("Press 'z' to attack", displayWidth+7850,displayHeight-720);
    textSize(20)
    text("1) Hit the mistery box", jin_a.x-650,displayHeight-700);
    text("2) Collect coins to get hint for treasure", jin_a.x-650, displayHeight-670);
    textSize(30)
    text("Objectives :-", jin_a.x-650,displayHeight-730);
    textSize(70);
    text(": " + score, jin_a.x+520,displayHeight-720);
  }
}

function startButton(){

  gameState = 1;

  bg_home.destroy();
  start_btn.destroy();

  bg2.visible = true;
  bg3.visible = true;
  bg4.visible = true;
  bg5.visible = true;
  bg6.visible = true;
  bg7.visible = true;
  bg8.visible = true;
  bg9.visible = true;
  bg10.visible = true;
  bg11.visible = true;
  bomb_.visible = true;
  bomb_1.visible = true;
  bomb_2.visible = true;

  jin_a.visible = true;
  brick_1.visible = true;
  brick_2.visible = true;
  brick_3.visible = true;
  brick_4.visible = true;
  brick_5.visible = true;
  brick_6.visible = true;
  spikes3.visible = true;
  
  spikes5.visible = true;
  spikes6.visible = true;
  spikes7.visible = true;
  brick_7.visible = true;
  brick_8.visible = true;
  brick_9.visible = true;
  brick_10.visible = true;
  brick_11.visible = true;
  coin_s.visible = true;
  
  

  bricks_1 = createSprite(displayWidth-1260, displayHeight-124,0,0);
  bricks_1.scale = 0.3;
  bricks_1.addImage("b_1_",bricks_1_Img);

  bricks_2 = createSprite(displayWidth-1050, displayHeight-124,0,0);
  bricks_2.scale = 0.3;
  bricks_2.addImage("b_2_",bricks_1_Img);

  bricks_3 = createSprite(displayWidth-840, displayHeight-124,0,0);
  bricks_3.scale = 0.3;
  bricks_3.addImage("b_3_",bricks_1_Img); 

  bricks_4 = createSprite(displayWidth-630, displayHeight-124,0,0);
  bricks_4.scale = 0.3;
  bricks_4.addImage("b_3_",bricks_1_Img); 

  bricks_5 = createSprite(displayWidth-420, displayHeight-124,0,0);
  bricks_5.scale = 0.3;
  bricks_5.addImage("b_3_",bricks_1_Img); 

  bricks_6 = createSprite(displayWidth-210, displayHeight-124,0,0);
  bricks_6.scale = 0.3;
  bricks_6.addImage("b_3_",bricks_1_Img); 

  bricks_7 = createSprite(displayWidth-0, displayHeight-124,0,0);
  bricks_7.scale = 0.3;
  bricks_7.addImage("b_3_",bricks_1_Img); 

  bricks_8 = createSprite(displayWidth+435, displayHeight-124,0,0);
  bricks_8.scale = 0.3;
  bricks_8.addImage("b_3_",bricks_1_Img); 

  bricks_9 = createSprite(displayWidth-1470, displayHeight-124,0,0);
  bricks_9.scale = 0.3;
  bricks_9.addImage("b_3_",bricks_1_Img);

  bricks_10 = createSprite(displayWidth+645, displayHeight-124,0,0);
  bricks_10.scale = 0.3;
  bricks_10.addImage("b_3_",bricks_1_Img);

  bricks_11 = createSprite(displayWidth+755, displayHeight-124,0,0);
  bricks_11.scale = 0.3;
  bricks_11.addImage("b_3_",bricks_1_Img);

  bricks_12 = createSprite(displayWidth+895, displayHeight-124,0,0);
  bricks_12.scale = 0.3;
  bricks_12.addImage("b_3_",bricks_1_Img);

  bricks_13 = createSprite(displayWidth+1900, displayHeight-124,0,0);
  bricks_13.scale = 0.3;
  bricks_13.addImage("b_3_",bricks_1_Img);

  bricks_14 = createSprite(displayWidth+2110, displayHeight-124,0,0);
  bricks_14.scale = 0.3;
  bricks_14.addImage("b_3_",bricks_1_Img);

  bricks_15 = createSprite(displayWidth+2320, displayHeight-124,0,0);
  bricks_15.scale = 0.3;
  bricks_15.addImage("b_3_",bricks_1_Img);

  bricks_16 = createSprite(displayWidth+2430, displayHeight-124,0,0);
  bricks_16.scale = 0.3;
  bricks_16.addImage("b_3_",bricks_1_Img);

  bricks_17 = createSprite(displayWidth+2640, displayHeight-124,0,0);
  bricks_17.scale = 0.3;
  bricks_17.addImage("b_3_",bricks_1_Img);

  bricks_18 = createSprite(displayWidth+2850, displayHeight-124,0,0);
  bricks_18.scale = 0.3;
  bricks_18.addImage("b_3_",bricks_1_Img);

  bricks_19 = createSprite(displayWidth+7900, displayHeight-124,0,0);
  bricks_19.scale = 0.3;
  bricks_19.addImage("b_3_",bricks_1_Img);

  bg = createSprite(displayWidth-1838, displayHeight-420);
  bg.scale = 1.5;
  bg.addImage("bg_1", bg_Img);

  spikes = createSprite(displayWidth+165, displayHeight-180,20,20);
  spikes.scale = 1;
  spikes.addImage("s_", spikes_Img);

  spikes4 = createSprite(displayWidth+275, displayHeight-180,20,20);
  spikes4.scale = 1;
  spikes4.addImage("s_", spikes_Img);

  spikes2 = createSprite(displayWidth+1750, displayHeight-148,20,20);
  spikes2.scale = 1;
  spikes2.addImage("s_", spikes_Img);

  mob_ = createSprite(displayWidth+930, displayHeight-200);
  mob_.scale = 0.5
  mob_.addAnimation("m", mob_Img);
  mob_.velocityX = -2;

  mob_1 = createSprite(displayWidth+3050, displayHeight-200);
  mob_1.scale = 0.5
  mob_1.addAnimation("m", mob_Img);
  mob_1.velocityX = -2;
  
  lava = createSprite(displayWidth+1352, displayHeight-80);
  lava.addImage("l", lava_Img);

  lava2 = createSprite(displayWidth+3310, displayHeight-80);
  lava2.addImage("l", lava_Img);

  lava3 = createSprite(displayWidth+4000, displayHeight-80);
  lava3.addImage("l", lava_Img);

  lava4 = createSprite(displayWidth+4690, displayHeight-80);
  lava4.addImage("l", lava_Img);

  lava5 = createSprite(displayWidth+5380, displayHeight-80);
  lava5.addImage("l", lava_Img);
  
  lava6 = createSprite(displayWidth+6070, displayHeight-80);
  lava6.addImage("l", lava_Img);

  lava7 = createSprite(displayWidth+6760, displayHeight-80);
  lava7.addImage("l", lava_Img);
  
  lava8 = createSprite(displayWidth+7450, displayHeight-80);
  lava8.addImage("l", lava_Img);

//storm_so.play();

/*
ob_1 = createSprite(0, 50,0,0);
ob_1.velocityX = +9.5;
//ob_1.visible = false;

ob_2 = createSprite(1365, 500,2,1000)
//ob_2.visible = false;

storm_ = createSprite(displayWidth-670, displayHeight-440, 10,10);
storm_.scale = 2.3
storm_.addAnimation("st_", storm_Img);

if(ob_1.isTouching(ob_2)){
  storm_.destroy();
  }

 */
}

function keyPressed(){

}