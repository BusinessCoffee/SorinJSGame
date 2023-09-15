class shop {
    constructor() {
    }
    
    
    build() {
        

        const baton = new Image()
        baton.src = './img/icon/baton.png'
        const knife = new Image()
        knife.src = './img/icon/knife.png'
        const sword = new Image()
        sword.src = './img/icon/sword.png'
        const photon = new Image()
        photon.src = './img/icon/photon.png'
        const crossbow = new Image()
        crossbow.src = './img/icon/crossbow.png'
        const revolver = new Image()
        revolver.src = './img/icon/revolver.png'
        const pistol = new Image()
        pistol.src = './img/icon/pistol.png'
        const rifle = new Image()
        rifle.src = './img/icon/rifle.png'
        //+550
            
        rifle.onload = () => {
            c.drawImage(baton,  50,50+550, 50,50)
            c.drawImage(knife,  150,50+550, 50,50)
            c.drawImage(sword,  250,50+550, 50,50)
            c.drawImage(photon,  350,50+550, 50,50)
            c.drawImage(crossbow,  50,150+550, 50,50)
            c.drawImage(revolver,  150,150+550, 50,50)
            c.drawImage(pistol,  250,150+550, 50,50)
            c.drawImage(rifle,  350,150+550, 50,50)
        }

        
        
        
    }

    button() {
        canvas.addEventListener("click", function (event) {
            const hbox = canvas.getBoundingClientRect()
            const x = event.clientX - hbox.left
            const y = event.clientY - hbox.top
                if (x >= 50 && x <= 100 && y >= 50+550 && y <= 100+550) {
                    alert('give baton')
                }
                if (x >= 150 && x <= 200 && y >= 50+550 && y <= 100+550) {
                    alert('give knife')
                }
                if (x >= 250 && x <= 300 && y >= 50+550 && y <= 100+550) {
                    alert('give sword')
                }
                if (x >= 350 && x <= 400 && y >= 50+550 && y <= 100+550) {
                    alert('give photon')
                }
                if (x >= 50 && x <= 100 && y >= 150+550 && y <= 200+550) {
                    alert('give crossbow')
                }
                if (x >= 150 && x <= 200 && y >= 150+550 && y <= 200+550) {
                    alert('give revolver')
                }
                if (x >= 250 && x <= 300 && y >= 150+550 && y <= 200+550) {
                    alert('give pistol')
                }
                if (x >= 350 && x <= 400 && y >= 150+550 && y <= 200+550) {
                    alert('give rifle')
                }
                
            
        })
    }
}

        
        