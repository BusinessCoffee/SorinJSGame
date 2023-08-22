Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += levelLength) {
        rows.push(this.slice(i, i + levelLength))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
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
        })
    })
    return objects
}
Array.prototype.createEnemiesFrom2D = function () {
    const Enemies = []
    this.forEach((row, y) => {
        row.forEach((Symbol, x) => {
            if (Symbol === 118) { 
                Enemies.push(new Enemy({
                    position: {
                        x: x * 32,
                        y: y * 32,
                    },
                }))
            }
        })
    })
    return Enemies
}