var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var lower;
var cloud, cloudImage;
var cactus;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6; 

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,170,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    lower = createSprite(200,190,400,10);
    lower.visible = false; 

    var ran = Math.round(random(10,100))
    console.log(ran)
}

function draw() {
    background(0);

    //jump when the space button is pressed
    if (keyDown("space") && trex.y > 100) {
        trex.velocityY = -10;
    }

    if(trex.velocityY < -10){
        trex.velocityY = -10;
    }
   
    if(trex.y < 100){
        trex.y = 100;
    }

    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    trex.collide(lower);

    spawnClouds();

    spawnCactus();

    drawSprites();
}

function spawnClouds()
{
    if(frameCount % 60 === 0)
    {
        cloud = createSprite(600,100,40,10);
        cloud.y = random(20,100);   
        cloud.velocityX = -3;

        cloud.addImage(cloudImage); 
        cloud.scale = 0.1;

        trex.depth = cloud.depth + 1;

        cloud.lifetime = 200;
    }
}

function spawnCactus()
{
    if(frameCount % 80 === 0)
    {
        cactus = createSprite(600,170,40,10);
        cactus.velocityX = -3;
        cactus.scale = 0.06;

        var i = Math.round(random(1,6));

        switch(i)
        {
            case 1:
                cactus.addImage(obstacle1);
                break;
            
            case 2:
                cactus.addImage(obstacle2);
                break;
            
            case 3:
                cactus.addImage(obstacle3);
                cactus.scale = 0.1;
                break;

            case 4:
                cactus.addImage(obstacle4);
                break;

            case 5:
                cactus.addImage(obstacle5);
                break;

            case 6:
                cactus.addImage(obstacle6);
                cactus.scale = 0.1;
                break;

            default:
                break;
        }   

        cactus.lifetime = 200;
    }
}