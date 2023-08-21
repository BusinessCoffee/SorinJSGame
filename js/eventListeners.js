window.addEventListener('keydown', (event) => {
    switch (event.key) {
    case 'w':
        // Fix infinite jump : debounce or jump count
        keys.w.pressed = true
        break
    case 'a':
        keys.a.pressed = true
        break
    case 'd':
        keys.d.pressed = true
        break
    }

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
    case 'w':
        keys.w.pressed = false
        break        
    case 'a':
        keys.a.pressed = false
        break
    case 'd':
        keys.d.pressed = false
        break
    }

})