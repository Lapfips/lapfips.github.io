const title = document.getElementById('title');
const flag1 = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');
const city = document.getElementById('city');
const cloud = document.getElementById('cloud');
const mount = document.getElementById('mount');
const code1 = document.querySelector('.code1')
const code2 = document.querySelector('.code2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    console.log(value)
    title.style.marginTop = value * 1.2 + 'px'

    flag1.style.marginLeft = -value + 'px'
    flag2.style.marginLeft = value + 'px'

    city.style.marginBottom = -value + 'px'

    cloud.style.marginBottom = -value * 1.1 + 'px'
    mount.style.marginBottom = -value * 1.2 + 'px'
})