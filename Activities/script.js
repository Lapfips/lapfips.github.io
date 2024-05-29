const slides = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];

function changeSlide(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides[index]}`;
}
