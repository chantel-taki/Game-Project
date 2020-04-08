
let game = new Game();
//let img;
function preload (){
 game.initialize();
  //img1 = loadImage("assets/corona-4881111_1280.png");
}

function setup() { 
  createCanvas(1920, 1080);
  game.setup();
    //image(img1, 0, 0);
  } 
  
  function draw() { 
  // background(220);
   //image(img,0,0);
   frameRate(250);
   game.display();
  }

  function keyPressed(){
    // W key
    if (keyCode === 87) {
      game.player.jump();
   //   game.player.img = createImg("assets/Player Jumping.gif");
      clear();
    }
    // S key
    if (keyCode === 83) {
      game.player.duck();
    }
  }