const slides = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];

const text1 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph1 = document.getElementById('day1');

const text2 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph2 = document.getElementById('day2');

const text3 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph3 = document.getElementById('day3');

const text4 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph4 = document.getElementById('day4');

const text5 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph5 = document.getElementById('day5')

const text6 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph6 = document.getElementById('day6')

const text7 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph7 = document.getElementById('day7')

const text8 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph8 = document.getElementById('day8')

const text9 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph9 = document.getElementById('day9')

const text10 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph10 = document.getElementById('day10')

const text11 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph11 = document.getElementById('day11')

const text12 = ["PIXEL ready for the fly", "It's time to take time", "Take a lunch"];
const paragraph12 = document.getElementById('day12')

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

function changeText1(direction) {
    let count = parseInt(paragraph1.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text1.length;
    } else if (direction === -1) {
        count = (count - 1 + text1.length) % text1.length;
    }

    paragraph1.innerHTML = text1[count];
    paragraph1.dataset.count = count;
}

function changeText2(direction) {
    let count = parseInt(paragraph2.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text2.length;
    } else if (direction === -1) {
        count = (count - 1 + text2.length) % text2.length;
    }

    paragraph2.innerHTML = text2[count];
    paragraph2.dataset.count = count;
}

function changeText3(direction) {
    let count = parseInt(paragraph3.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text3.length;
    } else if (direction === -1) {
        count = (count - 1 + text3.length) % text3.length;
    }

    paragraph3.innerHTML = text3[count];
    paragraph3.dataset.count = count;
}

function changeText4(direction) {
    let count = parseInt(paragraph4.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text4.length;
    } else if (direction === -1) {
        count = (count - 1 + text4.length) % text4.length;
    }

    paragraph4.innerHTML = text5[count];
    paragraph4.dataset.count = count;
}

function changeText5(direction) {
    let count = parseInt(paragraph5.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text5.length;
    } else if (direction === -1) {
        count = (count - 1 + text5.length) % text5.length;
    }

    paragraph5.innerHTML = text5[count];
    paragraph5.dataset.count = count;
}

function changeText6(direction) {
    let count = parseInt(paragraph6.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text6.length;
    } else if (direction === -1) {
        count = (count - 1 + text6.length) % text6.length;
    }

    paragraph6.innerHTML = text6[count];
    paragraph6.dataset.count = count;
}

function changeText7(direction) {
    let count = parseInt(paragraph7.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text7.length;
    } else if (direction === -1) {
        count = (count - 1 + text7.length) % text7.length;
    }

    paragraph7.innerHTML = text7[count];
    paragraph7.dataset.count = count;
}

function changeText8(direction) {
    let count = parseInt(paragraph8.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text8.length;
    } else if (direction === -1) {
        count = (count - 1 + text8.length) % text8.length;
    }

    paragraph8.innerHTML = text8[count];
    paragraph8.dataset.count = count;
}

function changeText9(direction) {
    let count = parseInt(paragraph9.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text9.length;
    } else if (direction === -1) {
        count = (count - 1 + text9.length) % text9.length;
    }

    paragraph9.innerHTML = text9[count];
    paragraph9.dataset.count = count;
}

function changeText10(direction) {
    let count = parseInt(paragraph10.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text10.length;
    } else if (direction === -1) {
        count = (count - 1 + text10.length) % text10.length;
    }

    paragraph10.innerHTML = text10[count];
    paragraph10.dataset.count = count;
}

function changeText11(direction) {
    let count = parseInt(paragraph11.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text11.length;
    } else if (direction === -1) {
        count = (count - 1 + text11.length) % text11.length;
    }

    paragraph11.innerHTML = text11[count];
    paragraph11.dataset.count = count;
}

function changeText12(direction) {
    let count = parseInt(paragraph12.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text12.length;
    } else if (direction === -1) {
        count = (count - 1 + text12.length) % text12.length;
    }

    paragraph12.innerHTML = text12[count];
    paragraph12.dataset.count = count;
}