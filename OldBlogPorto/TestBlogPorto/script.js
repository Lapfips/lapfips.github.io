const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
const code1 = document.querySelector('.code1')
const code2 = document.querySelector('.code2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'

    if (value < 1100) {
        code2.style.right =  -16 + '%'
    } else if (value < 1600) {
        code2.style.right =  -16+(value-1100)*(7/250)+'%'
    } else if (value < 2500) {
        code2.style.right =  -2 + '%'
    } else if (value < 3000) {
        code2.style.right =  -2+(value-2500)*(-7/250)+'%'
    }

    if (value < 1600) {
        code1.style.right =  -19 + '%'
    } else if (value < 2100) {
        code1.style.left =  -19+(value-1600)*(17/500)+'%'
    } else if (value < 2700) {
        code1.style.left =  -2+'%'
    } else if (value < 3200) {
        code1.style.left =  -2+(value-2700)*(-17/500)+'%'
    }
    
})