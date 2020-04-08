
let game = new Game();
//starting screen
let startImg;
//let img;
function preload (){
 game.initialize();
 startImg = createImg("assets/Start Screen.png").hide();
}

function setup() { 
  createCanvas(1920, 1080);

  //noLoop();
  game.setup();
  } 
  
  function draw() { 
    clear();
    if (game.startGame){
      game.display();
    } else {
      //createImg("assets/Start Screen.png");
      //image(startImg, 0, 0);
      startImg.show();
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
      startImg.hide();
      console.log("start");
    }
  }