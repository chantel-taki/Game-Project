
let game = new Game();
//let img;
function preload (){
   game.initialize();
  //img = loadImage("assets/corona-4881111_1280.png");
}

function setup() { 
  createCanvas(1920, 1080);
  game.setup();
    //image(img, 0, 0);
  } 
  
  function draw() { 
  // background(220);
  // image(img,0,0);
   frameRate(40);
   game.display();
  }

  function keyPressed(){
    // W key
    if (keyCode === 87) {
      game.player.jump();
    }
    // S key
    if (keyCode === 83) {
      game.player.duck();
    }
  }