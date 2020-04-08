class Player {
    constructor(){
        this.img = createImg("assets/PlayerRunning.gif");
        this.velocity = 0;
        this.gravity = 0.5;
        //this.jmpImg = createImg("assets/Player Jumping.gif");

    }
    //setup player
    setup(){
        this.height = this.img.height;
        this.width = this.img.width;
        this.x = 100;
        this.y = 400;
    }
    //display player and set up speed & gravity for player
    display() {
        this.img.position(this.x, this.y);
       // if (Player.jump){this.img = createImg("assets/Player Jumping.gif");}
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }
    //jump function to be called when pressing W
    jump(){
        this.velocity = -15;
        clear();
        //this.img = createImg("assets/Player Jumping.gif");

    }
    //duck function to be called when pressing S
    duck(){
        console.log("ducking");
        this.y += 40;
    }
    //death function to be called before game over
    death(){
        console.log("dead");
    }
}
