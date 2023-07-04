function greeting(firstName) {
    return `Привет, ${firstName}!`;
}

const nameYour = prompt("Введите свое имя: ");
console.log(greeting(nameYour));
