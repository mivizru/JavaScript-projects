//Задача N1 (Вывести в консоль числа от 1 до 5)

// for (a = 1; a <= 5; a++) {
//     console.log(a);
// }

// let a = 1;

// while(a <= 5) {
//     console.log(a)
//     a++;
// }

//Задача N2 Переписать на while

// for (let num = 0; num < 3; num++) {
//     console.log(`Число: ${num}`);
// }

// let num = 0;

// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }

// Задача N3 Прекратить работу цикла N1 когда size ровна 1

// for (let num = 0; num < 2; num++) {
//     for(let size = 0; size <= 3; size++) {
//         if(size == 1) break;
//         console.log(size);
//     }
// }

const myArray = [10, 15, 23, 65, 77, 88, 95];

let a = Math.max.apply(this, myArray);

console.log(a);

