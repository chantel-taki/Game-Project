
class Game {
    constructor(){
        this.obstacles = [];
        this.people = [];
    }
    initialize(){
        this.background = new Background();
        this.player = new Player();
        
    }
    display(){
        clear();
        this.background.display();
        this.player.display();

       if (frameCount % 700 === 0) {
           this.obstacles.push(new Obstacles());
          }
          this.obstacles.forEach((obstacle) => {
            obstacle.display();
          });
          this.obstacles = this.obstacles.filter((obstacle) => {
            return !obstacle.collision(this.player);
          }); 

          if (frameCount % 900 === 0) {
            this.people.push(new People());
           }
           this.people.forEach((person) => {
             person.display();
           });
           this.people = this.people.filter((person) => {
             return !person.collision(this.player);
           }); 
    }
    setup(){
        this.player.setup();
    }
}
