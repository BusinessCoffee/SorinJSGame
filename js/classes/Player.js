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
        this.friction= .7

        this.jumpStrength = -7.8
        this.movementSpeed = 2.75
        this.jumpLimit = 2
        this.ceilingClimbing = false

        this.jumpCount = 0
        this.wasJumping = false

        this.collisionBlocks = collisionBlocks
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    jumpCheck(){
        if (keys.w.pressed){
            if (player.velocity.y === 0){
                player.jump() 
                player.jumpCount=1
                player.wasJumping = false
            } 
            else if (player.jumpCount < player.jumpLimit){
                if(player.wasJumping == true){
                    player.wasJumping = false
                    player.jump() 
                    player.jumpCount++
                }
            }
        }
        else    player.wasJumping = true
        
    }
    jump(){
        player.velocity.y = player.jumpStrength
    }

    moveLeft(){
        player.velocity.x = player.movementSpeed 
    }

    moveRight(){
        player.velocity.x = -player.movementSpeed 
    }

    update() {
        player.velocity.x = player.velocity.x * player.friction
        player.jumpCheck()
        if (keys.d.pressed)   player.moveLeft()
        else if (keys.a.pressed) player.moveRight()
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
                        if (player.ceilingClimbing)this.velocity.y = 0// if set to 0 allows player to stick to the ceiling 
                        else this.velocity.y = 1 
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        break
                    }

                    if (this.velocity.y > 0) {
                        this.velocity.y = 0// can make the world bouncy by setting to -10
                        player.jumpCount=1
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