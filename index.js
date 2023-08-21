const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width  = 64 * 16 // 1024
canvas.height = 64 * 9  // 576

const parseCollisions = collisionLevel.parse2D()
const collisionBlocks = parseCollisions.createObjectsFrom2D()

const Background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/testmap.png'
})

const player = new Player({
    collisionBlocks,
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
}

function animate() {
    window.requestAnimationFrame(animate)
    
    Background.draw()
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })
    player.velocity.x = player.velocity.x * .07
    if (keys.d.pressed) {
        player.velocity.x = 2.75
    } else if (keys.a.pressed) player.velocity.x = -2.75
    player.draw()
    player.update()
}

animate()