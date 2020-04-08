
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

       if (frameCount % 800 === 0) {
           this.obstacles.push(new Obstacles());
          }
          this.obstacles.forEach((obstacle) => {
           // collision(obstacle);
            obstacle.display();
          });
          this.obstacles = this.obstacles.filter((obstacle) => {
            return !obstacle.collision(this.player);
          }); 

          if (frameCount % 1000 === 0) {
            this.people.push(new People());
           }
           this.people.forEach((person) => {
             person.display();
            // collision(person);
           });
           this.people = this.people.filter((person) => { 
             if (person.collision(this.player)){
              console.log("GAME OVER");
           } else{
            return !person.collision(this.player);
           }
           }); 

          
        }
    setup(){
        this.player.setup();
    }
}
