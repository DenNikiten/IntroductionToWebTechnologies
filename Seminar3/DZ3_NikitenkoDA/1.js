const celsius = +prompt("Введите температуру в градусах Цельсия: ")

const fahrenheit = Math.round((9 / 5) * celsius + 32);

alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit}`);