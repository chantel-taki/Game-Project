
let game = new Game();
//starting screen
let startImg;
let endImg;


function preload (){
 game.initialize();
 startImg = createImg("assets/StartScreen.gif").hide();
 endImg = createImg("assets/EndScreen.gif").hide();
}

function setup() { 
  createCanvas(1920, 1080);
  game.setup();
  } 
  
  function draw() { 
    clear();
    if (game.startGame && !game.endGame){
      game.display();
    }  else if (!game.startGame && !game.endGame){
      startImg.show();
    }
   if (game.endGame){
      endImg.show();
      game.player.img.hide();
      startImg.hide();
     // game.background.images.splice(0, 4)
     // game.background.images.src.forEach(element => {
       // element.hide();
     // });
     // game.items.splice(0, game.items.length);
      
     /* game.people.img.forEach(element => {
        element.hide();
      }); */
    }
    

  }

  function keyPressed(){
    // W key
    if (keyCode === 87) {
      game.player.jump();
    // game.player.img = createImg("assets/Player Jumping.gif").show();
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
    if (keyCode === 13 && game.endGame === true) {
      window.location.reload();
    }

   
  }