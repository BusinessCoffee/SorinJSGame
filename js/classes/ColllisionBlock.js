let blockSize = 32 // pixels in tile

class collisionBlock {
    constructor({position}) {
        this.position = position
        this.width = blockSize
        this.height = blockSize
    }

    draw() {
        c.fillStyle = 'rgba(0, 255, 0, 0)'
        c.fillRect(this.position.x , this.position.y, this.width, this.height)
    }
}