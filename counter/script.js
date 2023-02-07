const counter = document.querySelector('#counter');
//const plus = document.querySelector('#plus');
//const minus = document.querySelector('#minus');
//const reset = document.querySelector('#reset');
const buttons = document.querySelectorAll('#btn'); 

counter.innerHTML = 0;

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        if (e.target.id == 1) {
            counter.innerHTML++;
        } 
        
        if  (e.target.id == 2) {
            counter.innerHTML--;
        } 
        
        if (e.target.id == 3) {
            counter.innerHTML = 0;
        }

    });
});

//plus.addEventListener('click', () => counter.innerHTML++);
//minus.addEventListener('click', () => counter.innerHTML--);
//reset.addEventListener('click', () => counter.innerHTML = 0)

