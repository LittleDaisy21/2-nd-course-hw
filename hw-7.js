/*
// Задание 1
let sentence = 'js';
console.log(sentence.toUpperCase());

// Задание 2
const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

animals.forEach((animal) => {
    if (animal.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(animal);
    }
});



// Задание 3
let num = 32.58884;
console.log(Math.floor(num)); // Округляет аргумент до ближайшего меньшего целого.
console.log(Math.ceil(num)); // Округляет аргумент до ближайшего большего целого.
console.log(Math.round(num)); // возвращает число, округлённое к ближайшему целому.



// Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);

// Задание 5
function getRandomInt(max) {
    return Math.round(Math.random() * 11);
  }

  getRandomInt();

// Задание 6
let newArray = [];

function getRandomArrNumbers(number) {
    let arrLength = Math.floor(number / 2)
    
    for (let i = 0; i < arrLength; i++) {
    newArray.push(Math.round(Math.random() * number));
    }

    console.log(newArray);
    
}

getRandomArrNumbers(Number(prompt('Введите любое число')));



// Задание 7
function randomNumber(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1) + num1);
}

randomNumber(3, 25);


// Задание 8
let currentDate = new Date();
console.log(currentDate);



// Задание 9
currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


// Задание 10
currentDate = new Date();
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const days = ["воскресенье", "понедельник", "вторник", "среда", "Четверг", "пятница", "суббота"];

function date (currentDate) {

    let fullDate = currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' ' + '- это ' + days[currentDate.getDay()];
    return (fullDate)

}

date(currentDate);
*/


// Задание 11
function wordsGame() {
    let fruitsList = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsList = fruitsList.sort(() => Math.random() - 0.5);
    alert (fruitsList);
    let firstEl = String(prompt('Чему равнялся первый элемент массива?'));
    firstEl = firstEl.toLocaleLowerCase();
    let lastEl = String(prompt('Чему равнялся последний элемент массива?'));
    lastEl = lastEl.toLocaleLowerCase();
    if (firstEl === fruitsList[0] && lastEl === fruitsList[6]) {
        alert('Поздравляю, вы угадали!');
    } else if (firstEl === fruitsList[0] || lastEl === fruitsList[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
}