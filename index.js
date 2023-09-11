const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9  // 576
var level = 1
var parseCollisions = collisionLevel.parse2D()
var [collisionBlocks, enemies] = parseCollisions.createObjectsFrom2D()

var Background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/maps/Level1.png'
})

var player = new Player({
    collisionBlocks,
    enemies,
    imageSrc: './img/player/MarkIdleRight.png',
    frameRate: 4,
    animations: {
        idleRight: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/player/MarkIdleRight.png'
        },
        idleLeft: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/player/MarkIdleLeft.png'
        },
        runRight: {
            frameRate: 4,
            frameBuffer: 20,
            loop: true,
            imageSrc: './img/player/MarkRunRight.png'
        },
        runLeft: {
            frameRate: 4,
            frameBuffer: 20,
            loop: true,
            imageSrc: './img/player/MarkRunLeft.png'
        },
        attackLeft: {
            frameRate: 4,
            frameBuffer: 20,
            loop: false,
            imageSrc: './img/player/MarkAttackLeft.png'
        },
        attackRight: {
            frameRate: 4,
            frameBuffer: 20,
            loop: false,
            imageSrc: './img/player/MarkAttackRight.png'
        },
    }
})

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    r: {
        pressed: false
    },
    j: {
        pressed: false,
    },
    k: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate)

    Background.draw()
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })

    enemies.forEach((Enemy) => {
        Enemy.draw() 
        Enemy.update()
    })

    player.draw()
    player.update()
    if (player.hitbox.position.x > canvas.width -64){//level check
        player.position.x = starterPositionX
        player.position.y = starterPositionY
        level++
        console.log("level ",level)
        updateLevel()
    }
}

animate()