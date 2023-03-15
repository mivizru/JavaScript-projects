const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const points = document.querySelector('#points');
const eventList = ['click','keydown'];

points.innerHTML = 0;

eventList.forEach(function(e) {

document.addEventListener(e, function(e) {

    jump();

    (cactus.classList != 'cactusMov') ? cactus.classList.add('cactusMov') : '';

    })

});

function jump() {

    (dino.classList != 'jump') ? dino.classList.add('jump') : '';

    setTimeout( () => dino.classList.remove('jump'), 300);

};

function addPoints() {

    if(addPoints.isRun) {

        return false;

    }

    points.innerHTML++;
    
    addPoints.isRun = true;

    setTimeout( () => addPoints.isRun = false, 500);

}

let isAlive = setInterval(function() {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    (cactusLeft < 25) ? addPoints() : '';

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {

        alert('GAME OVER!');

        cactus.classList.remove('cactusMov');

        points.innerHTML = 0;

    }

}, 60)