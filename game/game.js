
class Game {
    constructor(){
       
    }
    initialize(){
        this.background = new Background();
        this.player = new Player();
        
    }
    display(){
        clear();
        this.background.display();
        this.player.display();

      //  if (frameCount % 80 === 0) {
         //   this.obstacles.display();
       //   }
        /*  this.obstacles = this.obstacles.filter((obstacle) => {
            return !obstacle.collision(this.player);
          }); */
    }
    setup(){
        this.player.setup();
    }
}
