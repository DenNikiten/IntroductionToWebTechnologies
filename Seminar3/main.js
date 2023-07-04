// let num = 5;
// alert(num);

// num = 10;  // одну и туже переменную создавать нельзя
// alert(num);

// let num = 5;
// console.log(num);  // выводит в консоль

// // const  - 80% создаем перемнные как const /////
// const num = 5;
// console.log(num);

// num = 10;
// console.log(num);  // ОШИБКА: нельзя в num положить другое число

// Задача 1

// const num1 = Number.parseFloat(prompt("Input a number num1: "));
// const num2 = +prompt("Input a number num2: ");
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`);

// or

// function sum(n1, n2) {    
//     return n1 + n2;
// }

// const num1 = Number.parseFloat(prompt("Input a number num1: "));
// const num2 = +prompt("Input a number num2: ");
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);

// Задача 2

// const userAgree = confirm("Вам хорошо живется?")
// if (userAgree) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну, вы держитесь там!");
// }

// Задача 3

// const product = prompt("Введите фрукт: ");

// switch (product.toLowerCase()) {
//     case "мандарины":
//         alert("Мандарины стоят 100 руб/кг");
//         break;
//     case "бананы":    
//     case "груши":
//         alert("Бананы и груши стоят 70 руб/кг");
//         break;
//     default:
//         alert("Нет такого продукта");
// }

// Задача 4

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]));


