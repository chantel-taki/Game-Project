class Player {
    constructor(){
        this.img = createImg("assets/PlayerRunning.gif");
        this.velocity = 0;
        this.gravity = 0.5;
        //this.jmpImg = createImg("assets/Player Jumping.gif");

    }
    setup(){
        this.height = this.img.height;
        this.width = this.img.width;
        this.x = 100;
        this.y = 400;
    }
    display() {
        this.img.position(this.x, this.y);
       // if (Player.jump){this.img = createImg("assets/Player Jumping.gif");}
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }
    jump(){
        this.velocity = -15;
        clear();
        //this.img = createImg("assets/Player Jumping.gif");

    }
    duck(){
        console.log("ducking");
        this.y += 40;
    }
    death(){
        console.log("dead");
    }
}
