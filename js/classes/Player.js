class Player extends Sprite {
    constructor({
        collisionBlocks = [], imageSrc, frameRate, animations
    }) {
        super({ imageSrc, frameRate, animations })
        this.position = {
            x: 50,
            y: 100,
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

        this.collisionBlocks = collisionBlocks
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
        player.velocity.y = player.jumpStrength
    }

    moveLeft() {
        player.velocity.x = -player.movementSpeed
    }

    moveRight() {
        player.velocity.x = player.movementSpeed
    }
    update() {
        this.movment()
        this.updateHitbox()
        this.checkForHorizontalCollision()
        this.applyGravity()
        this.updateHitbox()
       // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        this.checkForVerticalCollision()

        // above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
        } else this.velocity.y = 0
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
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offest + .01
                    this.velocity.x = 2
                    break
                }

                if (this.velocity.x > 0) {
                    const offest = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x - offest - .01
                    this.velocity.x = -2
                    break
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