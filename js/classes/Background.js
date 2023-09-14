function updateLevel(){
    switch (level){
        case 1:
            parseCollisions = collisionLevel.parse2D()
            Background = new Sprite({ position: {x: 0, y: 0,},imageSrc: './img/maps/Level1.png'})
            break
        case 2:
            parseCollisions = collisionLevel2.parse2D()
            Background = new Sprite({ position: {x: 0, y: 0,},imageSrc: './img/maps/Level2.png'})
            break
        default:
            parseCollisions = collisionLevel.parse2D()// level 1
            Background = new Sprite({ position: {x: 0, y: 0,},imageSrc: './img/maps/Level1.png'})
            break 
    }
    enemies = parseCollisions.createObjectsFrom2D()[1]
    player.enemies = enemies
    player.collisionBlocks = parseCollisions.createObjectsFrom2D()[0]  
    
}