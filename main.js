const JsonFruit = [
    { img: 'IMAGE/grape.png', h1: 'GRAPE' },
    { img: 'IMAGE/pineaple.png', h1: 'PINEAPPLE' },
    { img: 'IMAGE/watermelon.png', h1: 'WATERMELON' },
    { img: 'IMAGE/respberry.png', h1: 'RASPBERRY' },
    { img: 'IMAGE/dragonfruit.png', h1: 'DRAGONFRUIT' },
    { img: 'IMAGE/orange.png', h1: 'ORANGE' },
    { img: 'IMAGE/blueberry.png', h1: 'BLUEBERRY' },
    { img: 'IMAGE/kiwi.png', h1: 'KIWI' }
]

const FruitFlavors = document.querySelector('.fruits__flavors')


function fruit() {

JsonFruit.forEach(JsonFruit => {

    const divEL = document.createElement('div')
divEL.className = 'fruit__item'

const imgEL = document.createElement('img')
imgEL.src = JsonFruit.img

const h1El = document.createElement('h1')
h1El.innerText = JsonFruit.h1

divEL.appendChild(imgEL)
divEL.appendChild(h1El)

FruitFlavors.appendChild(divEL)

})


}

fruit()

const fruitItem = document.querySelector('.fruit__item')

fruitItem.addEventListener("mousseover", () => {

console.log('oi')

}) 

