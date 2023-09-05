let debounce = true
let starterPositionX = 50
let starterPositionY = 100

class Player extends Sprite {
    constructor({
        collisionBlocks = [], enemies = [], imageSrc, frameRate, animations
    }) {
        super({ imageSrc, frameRate, animations })
        this.position = {
            x: starterPositionX,
            y: starterPositionY,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = .3
        this.friction = .7

        this.jumpStrength = -7.8
        this.movementSpeed = 2.5
        this.jumpLimit = 2
        this.ceilingClimbing = false

        this.jumpCount = 0
        this.wasJumping = false

        this.health = 100
        this.collisionBlocks = collisionBlocks
        this.enemies = enemies
        this.parseCollisions = []
    }
    updateLevel(){
        switch (level){
            case 1:
                this.parseCollisions = collisionLevel.parse2D()
                player.collisionBlocks = this.parseCollisions.createObjectsFrom2D()
                break
            case 2:
                this.parseCollisions = collisionLevel2.parse2D()
                player.collisionBlocks = this.parseCollisions.createObjectsFrom2D()
                break

        }
    }
    jumpCheck() {
        if (keys.w.pressed) {
            if (player.velocity.y === 0) {
                player.jump()
                player.jumpCount = 1
                player.wasJumping = false
            }
            else if (player.jumpCount < player.jumpLimit) {
                if (player.wasJumping == true) {
                    player.wasJumping = false
                    player.jump()
                    player.jumpCount++
                }
            }
        }
        else player.wasJumping = true

    }
    jump() {
        level++            
        this.updateLevel()
        player.velocity.y = player.jumpStrength
    }

    moveLeft() {
        player.velocity.x = -player.movementSpeed
    }

    moveRight() {
        player.velocity.x = player.movementSpeed
    }
    
    update() {
        // this.updateLevel()
        this.movment()
        this.applyGravity()
        this.updateHitbox()
        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        this.checkForVerticalCollision()
        this.checkForEnemy()
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
    }

    movment() {
        // this is the blue box
       // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
       // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x
        player.velocity.x = player.velocity.x * player.friction
        this.updateHitbox()
        this.checkForHorizontalCollision()
        this.updateHitbox() 
        player.jumpCheck()
        if (keys.d.pressed) {
                player.moveRight()
                player.switchSprite('runRight')
                player.lastDirection = 'right'
        }
        else if (keys.a.pressed) {
                player.moveLeft()
                player.switchSprite('runLeft')
                player.lastDirection = 'left'
        }
        else {
            if (player.lastDirection === 'left') {
                player.switchSprite('idleLeft')
            } else {
                player.switchSprite('idleRight')
            }
        }
        if (keys.r.pressed) {
            player.health = 100
            player.position.x = starterPositionX
            player.position.y = starterPositionY
            // level++            
            // this.updateLevel()
            console.log(level)
        }
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 16,
                y: this.position.y
            },
            width: 30,
            height: 60,
        }
    }

    checkForHorizontalCollision() {
        // Check for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                // collision on x axis going to the left
                if (this.velocity.x < 0) {
                    const offest = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offest + 1
                    // this.velocity.x = 2
                    break
                }

                if (this.velocity.x > 0) {
                    const offest = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x - offest - 1
                    // this.velocity.x = -2
                    break
                }
            }
        }
    }


    checkForEnemy() {
        for (let i = 0; i < this.enemies.length; i++) {
            const enemies = this.enemies[i]
            if (this.hitbox.position.x <= enemies.position.x + enemies.width &&
                this.hitbox.position.x + this.hitbox.width >= enemies.position.x &&
                this.hitbox.position.y + this.hitbox.height >= enemies.position.y &&
                this.hitbox.position.y <= enemies.position.y + enemies.height) {
                // collision on x axis going to the left 
                if (debounce) {
                    debounce = false
                    new playAudio("swhurt")
                    console.log(this.health -= 10)
                    if (this.health <= 0) {
                        new playAudio("swdeath")
                        player.position.x = starterPositionX
                        player.position.y = starterPositionY
                        player.health = 100
                    }
                    function rest() {debounce = true; return true}
                    setTimeout(rest, 500)
                    debounce = false
                }
            }
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
    }

    checkForVerticalCollision() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                if (this.velocity.y < 0) {
                    if (player.ceilingClimbing) this.velocity.y = 0// if set to 0 allows player to stick to the ceiling 
                    else this.velocity.y = 1
                    const offest = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offest + 0.01
                    break
                }

                if (this.velocity.y > 0) {
                    this.velocity.y = 0// can make the world bouncy by setting to -10
                    player.jumpCount = 1
                    const offest = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = collisionBlock.position.y - offest - 0.01
                    break
                }
            }
        }
    }
}