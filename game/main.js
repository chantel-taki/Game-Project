
let game = new Game();
//starting screen
let startImg;
//let img;
function preload (){
 game.initialize();
this.startImg = createImg("assets/Start Screen.png");
}

function setup() { 
  createCanvas(1920, 1080);
  game.setup();
  noLoop();
  } 
  
  function draw() { 
    if (game.startGame === true){
      game.display();
      noLoop();
    } else{
     image(this.startImg, 0, 0);
    }
  
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