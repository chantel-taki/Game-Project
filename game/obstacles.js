
class Obstacles {
    constructor(){
        this.height = 25;
        this.width = 25;
        this.x = width;
        this.y = 400;
        this.img = createImg("assets/corona.png");
    }
    display(){
        this.x--;
        this.img.position(this.x, this.y);
    }

    collision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this. y;
        let bottomSide = this.y + this.height;

        let playerLeft = player.x;
        let playerRight = player.x + player.width;
        let playerTop = player.y;
        let playerBottom = player.y + player.height;

        let colideOnX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
        let colideOnY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);

        let collided = colideOnX && colideOnY;
        return collided;


    }
}

class People {
    constructor(){
        this.height = 25;
        this.width = 25;
        this.x = width;
        this.y = 600;
        this.img = createImg("assets/PersonIdle.gif");
    }
    display(){
        this.x--;
        this.img.position(this.x, this.y);
    }
    collision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let topSide = this. y;
        let bottomSide = this.y + this.height;

        let playerLeft = player.x;
        let playerRight = player.x + player.width;
        let playerTop = player.y;
        let playerBottom = player.y + player.height;

        let colideOnX = (leftSide > playerLeft && leftSide < playerRight) || (rightSide > playerLeft && rightSide < playerRight);
        let colideOnY = (topSide > playerTop && topSide < playerBottom) || (bottomSide > playerTop && bottomSide < playerBottom);

        let collided = colideOnX && colideOnY;
        return collided;


    }
}