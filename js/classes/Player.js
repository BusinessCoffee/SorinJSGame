class Player {
    constructor({
        collisionBlocks = []
    }) {
        this.position = {
            x: 50,
            y: 100,
        }

        this.velocity = {
            x:0,
            y:0,
        }
        this.width = 25
        this.height = 25
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = .3

        this.collisionBlocks = collisionBlocks
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.x += this.velocity.x
        // Check for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x && 
                this.position.y + this.height >= collisionBlock.position.y && 
                this.position.y <= collisionBlock.position.y + collisionBlock.height) 
                {   
                    // collision on x axis going to the left
                    if (this.velocity.x < 0) {
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                        break
                    }

                    if (this.velocity.x > 0) {
                        this.position.x = collisionBlock.position.x - this.width - 0.01
                        break
                    }
                }
        }

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x && 
                this.position.y + this.height >= collisionBlock.position.y && 
                this.position.y <= collisionBlock.position.y + collisionBlock.height) 
                {   
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        break
                    }

                    if (this.velocity.y > 0) {
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y - this.height - 0.01
                        break
                    }
                }
        }

        
        // above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
               

            } else this.velocity.y = 0
    }
}