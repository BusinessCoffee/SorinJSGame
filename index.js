const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width  = 64 * 16 // 1024
canvas.height = 64 * 9  // 576

const parseCollisions = collisionLevel.parse2D()
const collisionBlocks = parseCollisions.createObjectsFrom2D()
const parseEnemies = enemyTest.parse2D()
const enemies = parseEnemies.createEnemiesFrom2D()

const Background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/testmap.png'
})

const player = new Player({
    collisionBlocks,
    enemies,
    imageSrc: './img/player/MarkIdleRight.png',
    frameRate: 4,
    animations: {
        idleRight: {
            frameRate: 4,
            frameBuffer:10,
            loop: true,
            imageSrc: './img/player/MarkIdleRight.png'
        },
        idleLeft: {
            frameRate: 4,
            frameBuffer:10,
            loop: true,
            imageSrc: './img/player/MarkIdleLeft.png'
        },
        runRight: {
            frameRate: 4,
            frameBuffer:20,
            loop: true,
            imageSrc: './img/player/MarkRunRight.png'
        },
        runLeft: {
            frameRate: 4,
            frameBuffer:20,
            loop: true,
            imageSrc: './img/player/MarkRunLeft.png'
        }
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
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    
    Background.draw()
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })
    enemies.forEach((Enemy) => {
        Enemy.update()
        Enemy.draw()
    })

    player.draw()
    player.update()
}

animate()