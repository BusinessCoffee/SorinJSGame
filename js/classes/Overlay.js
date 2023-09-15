class Overlay {
    constructor({health, score}){
        this.health = health
        this.score = score
        this.initiate()
    }

    initiate() {
        this.overlay = document.createElement("ul")
        document.body.appendChild(this.overlay)

        document.body.style.fontFamily = "ＭＳ Ｐゴシック"
        document.body.style.fontSize = "150%"

        this.overlay.style.marginLeft = "1000px"
        this.overlay.style.marginTop = "-1050px"

        this.healthText = document.createElement("h5")
        this.healthText.innerHTML = "Health | " + this.health
        this.healthText.style.color = "white"

        this.scoreText = document.createElement("h5")
        this.scoreText.innerHTML = "Score | " + this.score
        this.scoreText.style.color = "white"

        this.levelText = document.createElement("h5")
        this.levelText.innerHTML = "Level | 1" 
        this.levelText.style.color = "white"

        this.highScore = document.createElement("h5")
        this.highScore.innerHTML = "HighScore | 0" 
        this.highScore.style.color = "white"

        this.overlay.appendChild(this.healthText)
        this.overlay.appendChild(this.scoreText)
        this.overlay.appendChild(this.levelText)
        this.overlay.appendChild(this.highScore)

    }

    update() {
        this.health = player.health
        this.score = player.score
        this.enemy = player.enemies.health

        this.text()
    }

    text() {
        this.healthText.innerHTML = "Health | " + this.health
        this.scoreText.innerHTML = "Score | " + this.score
        this.levelText.innerHTML = "Level | " + level
        this.highScore.innerHTML = "HighScore | " + localStorage.getItem("data")
    }
}


