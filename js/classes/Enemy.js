
class Enemy {
    constructor({position}) {
        this.position = position
        this.width = blockSize
        this.height = blockSize
        this.walkCycleLength =  32*3
        this.movementSpeed = 1
        this.walkCycle = 0
        this.moveL = true

    }
    
    moveLeft(){
        this.position.x -= this.movementSpeed
    }

    moveRight(){
        this.position.x += this.movementSpeed
    }

    update(){
        if (this.moveL){
            this.walkCycle+=this.movementSpeed
            this.moveLeft()
        }
        else{
            this.walkCycle-=this.movementSpeed
            this.moveRight()
        }
        if(this.walkCycle>=this.walkCycleLength){
            this.moveL = false
        }
        else if (this.walkCycle<=0){
            this.moveL = true
        }
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x , this.position.y, this.width, this.height)
    }
}