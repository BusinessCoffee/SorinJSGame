Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += levelLength) {
        rows.push(this.slice(i, i + levelLength))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    const Enemies = []
    this.forEach((row, y) => {
        row.forEach((Symbol, x) => {
            if (Symbol === 1) { // 1 = collision box
                objects.push(new collisionBlock({
                    position: {
                        x: x * 32,
                        y: y * 32,
                    },
                }))
            }
            if (Symbol === 2) { 
                Enemies.push(new Crawler ({
                    position: {
                        x: x * 32,
                        y: y * 32,
                    },
                    imageSrc: './img/enemies/GoombaRight.png',
                    frameRate: 5,
                    animations: {
                        Right: {
                            frameRate: 5,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc: './img/enemies/GoombaRight.png'
                        },
                        Left: {
                            frameRate: 5,
                            frameBuffer: 10,
                            loop: true,
                            imageSrc: './img/enemies/GoombaLeft.png'
                        },
                    },
                    health: 25
                }))
            }
        })
    })
    return [objects, Enemies]
}