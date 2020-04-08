
class Game {
    constructor(){
      // Creates arrays to push obstacles/people
        this.obstacles = [];
        this.people = [];
        this.items = [];
        this.startGame = false;
        this.endGame = false;
    }

    initialize(){
      //initialize/generate the player and background
        
       // if(this.startGame = true){
          this.player = new Player();
          this.background = new Background();
      //  }
        
    }

    // setup the player in game
    setup(){
        this.player.setup();
         }

    display(){
       //clear the display after movements
        //clear();
        //display the background & player
        this.background.display();
        this.player.display();

        //push obstacles  to array at frame count
        if (frameCount % 900 === 0) {
          this.obstacles.push(new Obstacles());
         }
         this.obstacles.forEach((obstacle) => {
           obstacle.display();
         });

         // check if collided with player, if so, end the game
         this.obstacles = this.obstacles.filter((obstacle) => {
           if (obstacle.collision(this.player)){
             this.endGame = true;
          } else{
           return !obstacle.collision(this.player);
          }
         }); 

         //push people to array at frame count
         if (frameCount % 1020 === 0) {
           this.people.push(new People());
          }
          this.people.forEach((person) => {
            person.display();
          });

          // check if collided with player, if so, end the game
          this.people = this.people.filter((person) => { 
            if (person.collision(this.player)){
             this.endGame = true;
          } else{
           return !person.collision(this.player);
          }
          });

                 //push items to array at frame count
                 if (frameCount % 1000 === 0) {
                   this.items.push(new Items());
                  }
                  this.items.forEach((item) => {
                    item.display();
                  });
       
                  // check if collected by player, if so, add to score
                  this.items = this.items.filter((item) => { 
                    if (item.collect(this.player)){
                     console.log("collected");
                  } else{
                   return !item.collect(this.player);
                  }
                  }); 

                  if(this.endGame){
                    noLoop();
                  }
              }
            }
