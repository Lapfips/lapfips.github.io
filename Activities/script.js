const slides1 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];

const text1 = ["PIXEL ready for the fly", "PIXEL in the plane", "PIXEL discovers the sky", "PIXEL arrives and relax with a beer", "It's time to celebrate", "Let's go to the restaurant", "Alix takes a cocktail", "Alix takes a pizza", "Ethan takes 2 pizzas, one for him and one for PIXEL"];
const paragraph1 = document.getElementById('day1');

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

function changeSlide1(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides1.length - 1;
    if (index >= slides1.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides1[index]}`;
}

const slides2 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"];

const text2 = ["It's time to lunch with our GOAT Etienne", "PIXEL and Ethan are working on the blog", "The beauty of Porto", "The bridge with the metro", "Adrien is posing for us", "Quentin²", "Another view of this bridge", "The Douro seen from the top", "View of Porto on Gaia's side", "The main place of Porto", "PIXEL is posing for the blog"];
const paragraph2 = document.getElementById('day2');

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

function changeSlide2(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides2.length - 1;
    if (index >= slides2.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides2[index]}`;
}

const slides3 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

const text3 = ["The Mercado do Bolhão", "Mr blue sky", "First survey with a German", "Second survey with two Toulousains", "Third survey with two Belgians from São Paulo", "Fourth survey with a Portuan", "Group photo in the Mercado"];
const paragraph3 = document.getElementById('day3');

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

function changeSlide3(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides3.length - 1;
    if (index >= slides3.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides3[index]}`;
}

const slides4 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const text4 = ["Let's go to the restaurant for Etienne", "We walked a lot with Quentin²", "The Douro at the end of the afternoon", "Ethan's plate for 2 people", "Alix's plate with a beautiful presentation", "PIXEL is vibing in the night"];
const paragraph4 = document.getElementById('day4');

function changeText4(direction) {
    let count = parseInt(paragraph4.dataset.count) || 0;

    if (direction === 1) {
        count = (count + 1) % text4.length;
    } else if (direction === -1) {
        count = (count - 1 + text4.length) % text4.length;
    }

    paragraph4.innerHTML = text4[count];
    paragraph4.dataset.count = count;
}

function changeSlide4(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides4.length - 1;
    if (index >= slides4.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides4[index]}`;
}

const slides5 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

const text5 = ["Group photo before the cruise", "Waiting for the boat in the port", "PIXEL the sailer", "Church from the Douro", "Green Porto", "Wine always here when you need it", "Sunny day"];
const paragraph5 = document.getElementById('day5')

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

function changeSlide5(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides5.length - 1;
    if (index >= slides5.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides5[index]}`;
}

const slides6 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const text6 = ["PIXEL visits Metyis company", "First conference presented by a represent of the company", "Second conference with two workers", "Lunch with bros", "Our 7,50€ plates", "All the team in the taxi"];
const paragraph6 = document.getElementById('day6')

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

function changeSlide6(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides6.length - 1;
    if (index >= slides6.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides6[index]}`;
}

const slides7 = ["1.png", "2.png"];

const text7 = ["PIXEL and his week-end breakfast", "We won!!! Toulouse is the best!"];
const paragraph7 = document.getElementById('day7')

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

function changeSlide7(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides7.length - 1;
    if (index >= slides7.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides7[index]}`;
}

const slides8 = ["1.png", "2.png"];

const text8 = ["Sunset on the Douro", "Porto at night with Ophélie and the team"];
const paragraph8 = document.getElementById('day8')

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

function changeSlide8(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides8.length - 1;
    if (index >= slides8.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides8[index]}`;
}

const slides9 = ["1.png", "2.png", "3.png", "4.png"];

const text9 = ["PIXEL on his throne looking at the ocean", "PIXEL's beautiful throne", "Adrien the thief", "Adrien and Quentin.G are looking for the One Piece"];
const paragraph9 = document.getElementById('day9')

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

function changeSlide9(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides9.length - 1;
    if (index >= slides9.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides9[index]}`;
}

const slides10 = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const text10 = ["PIXEL the tourist", "PIXEL found the love", "It's time to present", "PIXEL is shooting with the girls", "And the winner is ......"];
const paragraph10 = document.getElementById('day10')

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

function changeSlide10(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides10.length - 1;
    if (index >= slides10.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides10[index]}`;
}

const slides11 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const text11 = ["The last day in Porto", "Goodbye Douro", "The final stretch for the blog", "Last shopping in Portugal", "Beautiful church", "A beautiful little street"];
const paragraph11 = document.getElementById('day11')

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

function changeSlide11(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides11.length - 1;
    if (index >= slides11.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides11[index]}`;
}

const slides12 = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const text12 = ["PIXEL and the Philosopher's Stone", "PIXEL in Paris", "Waiting at the airport", "Ready to fly", "Goodbye Porto <3"];
const paragraph12 = document.getElementById('day12')

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

function changeSlide12(element, direction) {
    const slider = element.parentElement;
    const img = slider.querySelector('.slide');
    const day = slider.getAttribute('data-day');
    let index = parseInt(img.getAttribute('data-index'));

    index += direction;
    if (index < 0) index = slides12.length - 1;
    if (index >= slides12.length) index = 0;

    img.setAttribute('data-index', index);
    img.src = `../img/${day}/${slides12[index]}`;
}