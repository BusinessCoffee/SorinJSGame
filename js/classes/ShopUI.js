class shop {
    constructor() {
    }
    
    
    build() {
        const canvas = document.createElement('canvas')
        canvas.width = 1000
        canvas.height = 1000
        const  ctx = canvas.getContext('2d')
        
        const baton = new Image()
        baton.src = 'image/icon/baton.png'
        const knife = new Image()
        knife.src = 'image/icon/knife.png'
        const sword = new Image()
        sword.src = 'image/icon/sword.png'
        const photon = new Image()
        photon.src = 'image/icon/photon.png'
        const crossbow = new Image()
        crossbow.src = 'image/icon/crossbow.png'
        const revolver = new Image()
        revolver.src = 'image/icon/revolver.png'
        const pistol = new Image()
        pistol.src = 'image/icon/pistol.png'
        const rifle = new Image()
        rifle.src = 'image/icon/rifle.png'

            
            ctx.drawImage(baton, 50, 50)
            ctx.drawImage(knife, 50, 150)
            ctx.drawImage(sword, 50, 250)
            ctx.drawImage(photon, 50, 350)
            ctx.drawImage(crossbow, 150, 50)
            ctx.drawImage(revolver, 150, 150)
            ctx.drawImage(pistol, 150, 250)
            ctx.drawImage(rifle, 150, 350)
        

        
        
        canvas.addEventListener("click", function (event) {
            console.log("clicked")
            const hbox = canvas.getBoundingClientRect()
            const x = event.clientX - hbox.left
            const y = event.clientY - hbox.top
                if (x >= 50 && x <= 100 && y >= 50 && y <= 100) {
                    alert('give baton')
                }
                if (x >= 150 && x <= 200 && y >= 50 && y <= 100) {
                    alert('give knife')
                }
                if (x >= 250 && x <= 300 && y >= 50 && y <= 100) {
                    alert('give sword')
                }
                if (x >= 350 && x <= 400 && y >= 50 && y <= 100) {
                    alert('give photon')
                }
                if (x >= 50 && x <= 100 && y >= 150 && y <= 200) {
                    alert('give crossbow')
                }
                if (x >= 150 && x <= 200 && y >= 150 && y <= 200) {
                    alert('give revolver')
                }
                if (x >= 250 && x <= 300 && y >= 150 && y <= 200) {
                    alert('give pistol')
                }
                if (x >= 350 && x <= 400 && y >= 150 && y <= 200) {
                    alert('give rifle')
                }
            document.body.appendChild(canvas)
        })
        
        
    }
}