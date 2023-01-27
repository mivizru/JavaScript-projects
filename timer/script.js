const input = document.querySelector('#input');
const blockTime = document.querySelector('.time');
let interval;

blockTime.innerHTML = 0;
input.value = 0;

document.querySelector('#start').addEventListener('click', () => {
   
    if (input.value < 0) {

        alert('Число не может быть меньше 0!')

        input.value = 0;
    
    } else if (isNaN(input.value)) { 

        alert(input.value + ' не является числом!') 

        input.value = 0;

    }

    blockTime.innerHTML = input.value;

    clearInterval(interval);

    interval = setInterval(subtrackTime, 1000)

});

document.querySelector('#stop').addEventListener('click', () => {

    clearInterval(interval);         

});

document.querySelector('#reset').addEventListener('click', () => {

    input.value = 0;

    blockTime.innerHTML = 0;

});

function subtrackTime() {

    if (blockTime.innerHTML > 0) {

        blockTime.innerHTML--;

        input.value--;

        if (input.value < 0 || blockTime.innerHTML == 0) {

            input.value = 0;

            blockTime.innerHTML = 0;
        }

    } else {

        clearInterval(interval);  

    }

}