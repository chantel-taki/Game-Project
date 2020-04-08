
let game = new Game();
//starting screen
let startImg;
//let img;
function preload (){
 game.initialize();
//this.startImg = createImg("assets/Start Screen.png");
}

function setup() { 
  createCanvas(1920, 1080);

  //noLoop();
  game.setup();
  } 
  
  function draw() { 
    if (game.startGame === true){
      game.display();
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

    if (keyCode === 13) {
      game.startGame = true;
      console.log("start");
    }
  }