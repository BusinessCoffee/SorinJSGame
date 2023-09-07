class Crawler extends Sprite{
    constructor({ position, imageSrc, frameRate, animations, health }) {
        super({ imageSrc, frameRate, animations })
        this.position = position
        this.walkCycleLength = 32 * 3
        this.movementSpeed = .5
        this.walkCycle = 0
        this.moveL = true
        this.starterHealth = health
        this.health = this.starterHealth
    }

    moveLeft() {
        this.position.x -= this.movementSpeed
    }

    moveRight() {
        this.position.x += this.movementSpeed
    }

    update() {
        this.move()
    }

    move() {
        if (this.moveL) {
            this.walkCycle += this.movementSpeed
            this.switchSprite('Left')
            this.moveLeft()
        }
        else {
            this.walkCycle -= this.movementSpeed
            this.switchSprite('Right')
            this.moveRight()
        }
        if (this.walkCycle >= this.walkCycleLength) {
            this.moveL = false
        }
        else if (this.walkCycle <= 0) {
            this.moveL = true
        }
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
    }
}