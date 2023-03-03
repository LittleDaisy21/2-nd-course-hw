// Задание 1
let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));
if (userPassword === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 110;
let e = 56;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
a = 2;
let b = '3';
b = 3;
alert(a + b);

// Задание 5
let monthNumber = String(prompt('Какой сейчас месяц?'));
switch (monthNumber) {
    case '1':
    console.log('Зима');
    break;
    case '2':
    console.log('Зима');
    break;
    case '12':
    console.log('Зима');
    break;
    case '3':
    console.log('Весна');
    break;
    case '4':
    console.log('Весна');
    break;
    case '5':
    console.log('Весна');
    break;
    case '6':
    console.log('Лето');
    break;
    case '7':
    console.log('Лето');
    break;
    case '8':
    console.log('Лето');
    break;
    case '9':
    console.log('Осень');
    break;
    case '10':
    console.log('Осень');
    break;
    case '11':
    console.log('Осень');
    break;
    default: console.log('Ошибка');
    break;
}

// Задание 7
let answer = Number(prompt('Пожалуйста, введите любое число'));
if (answer % 2) {
    alert('Число нечетное');
} else {
    alert('Число четное');
}

// Задание 8
let clientOS = Number(prompt('Укажите какой системой вы пользуетесь: 0 — iOS, 1 — Android'));
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
}
else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
}
else {
    alert('Данные введены неправильно')
}


// Задание 9