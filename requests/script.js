const CORRECT_ANSWER = 'Ответ правильный!';
const ERROR_ANSWER = 'Ответ не правильный!';
const inputNode = document.querySelector('.input');
const buttonNode = document.querySelector('.button');
const outputNode = document.querySelector('.output');
const questionsNode = document.querySelector('.questions');
const questions = ['Какой остров самый большой на Земле?', 'Как называются "рога" у жирафа?','Что в огне не горит и в воде не тонет?'];
const answers = ['ГРЕНЛАНДИЯ', 'ОССИКОНЫ','ЛЁД'];

let intRandom = Math.floor(Math.random() * 3);

questionsNode.innerHTML = questions[intRandom];

buttonNode.addEventListener('click', function() {

    const answer = inputNode.value.toUpperCase();

         if(!answer) {
           outputNode.innerHTML = '';
           return;
         }

    let output;  

        for (let i = 0; i < answers.length; i++) {
             if (answers[i] == answer) {
                output = CORRECT_ANSWER;
                break;
            } else {
                output = ERROR_ANSWER;
            }
        }

    outputNode.innerHTML = output;

});