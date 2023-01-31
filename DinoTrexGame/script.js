const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const points = document.querySelector('#points');
const eventList = ['click','keydown'];

points.innerHTML = 0;

eventList.forEach(function(e) {

document.addEventListener(e, function(e) {

    jump();

    if(cactus.classList != 'cactusMov') {
    
        cactus.classList.add('cactusMov')

    }

    setTimeout(function() {

        points.innerHTML++

    }, 1600)   

    })

});

function jump () {

    if(dino.classList != 'jump') {

        dino.classList.add('jump')

    } 

    setTimeout(function() {

        dino.classList.remove('jump')

    }, 400)

};

let isAlive = setInterval(function() {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {

        alert('GAME OVER!')

        cactus.classList.remove('cactusMov')

        setTimeout(function() {

        points.innerHTML = 0;
        
        }, 1000) 
    }

}, 50)