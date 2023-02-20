const result = document.querySelector('#result');
const number1 = document.querySelector('#num1');
const actionElm = document.querySelector('#action');
const number2 = document.querySelector('#num2');
const resultBtn = document.querySelector('#resultBtn');

result.innerHTML = 0;

resultBtn.addEventListener('click', () => {

    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let action = actionElm.value;

    if(isNaN(num1) || isNaN(num2)) {
        result.innerHTML = 'Ошибка! введите число!';
    } else {

    switch (action) {
        case 'plus':
            result.innerHTML = num1 + num2;
          break;
        case 'minus':
            result.innerHTML = num1 - num2;
          break;
        case 'multiply':
            result.innerHTML = num1 * num2;
          break;
        case 'divide':
            result.innerHTML = num1 / num2;
          break;
      };

    };

});