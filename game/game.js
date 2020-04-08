
class Game {
    constructor(){
      // Creates arrays to push obstacles/people
        this.obstacles = [];
        this.people = [];
    }

    initialize(){
      //initialize/generate the player and background
        this.background = new Background();
        this.player = new Player();
    }

    // setup the player 
    setup(){
        this.player.setup();
         }

    display(){
      //clear the display after movements
        clear();
        //display the background & player
        this.background.display();
        this.player.display();
        
        //push obstacles  to array at frame count
           if (frameCount % 800 === 0) {
           this.obstacles.push(new Obstacles());
          }
          this.obstacles.forEach((obstacle) => {
            obstacle.display();
          });

          // check if collided with player, if so, end the game
          this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.collision(this.player)){
              console.log("GAME OVER");
           } else{
            return !obstacle.collision(this.player);
           }
          }); 

          //push people to array at frame count
          if (frameCount % 1000 === 0) {
            this.people.push(new People());
           }
           this.people.forEach((person) => {
             person.display();
           });

           // check if collided with player, if so, end the game
           this.people = this.people.filter((person) => { 
             if (person.collision(this.player)){
              console.log("GAME OVER");
           } else{
            return !person.collision(this.player);
           }
           }); 
        }

}
