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
    case 'r':
        keys.r.pressed = true
        break
    case 'j':
        keys.j.pressed = true
        break
    case 'k':
        keys.k.pressed = true
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
    case 'r':
        keys.r.pressed = false
        break
    case 'j':
        keys.j.pressed = false
        break
    case 'k':
        keys.k.pressed = false
        break
    }
})