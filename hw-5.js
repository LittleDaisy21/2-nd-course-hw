// Задание 1

function smallNumber(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
};

smallNumber();

console.log(smallNumber(8, 4));
console.log(smallNumber(6, 6));


// Задание 2
function evenNumber() {
    const answer = Number(prompt('Пожалуйста, введите любое число'));
    if (answer % 2 === 0) {
        alert('Число четное');
    } else if (answer % 2 > 0) {
        alert('Число нечетное'); 
    } else {
        alert(NaN);
    }
};

evenNumber();


// Задание 3.1

let n = Number(prompt('Пожалуйста, введите любое число'));

function squareNumber(n) {
    return n ** 2;
}

squareNumber();
console.log(squareNumber(n));


// Задание 3.2

let d = Number(prompt('Пожалуйста, введите любое число'));

function squareNumber2(d) {
    return d ** 2;
}

squareNumber2();
alert(squareNumber2(d));

// Задание 4
function userAge() {
    let age = Number(prompt('Сколько вам лет?'));
    if (age < 0) {
        alert ('Вы ввели неправильное значение');
    } else if (age >=0 && age <= 12) {
        alert ('Привет, друг!');
    } else {
        alert ('Добро пожаловать!');
    }      
}

userAge();

// Задание 5
function userAnswer(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        alert ('Одно или оба значения не являются числом');
    }
}

let result = userAnswer(6, 7);
console.log(result);
result = userAnswer(NaN, 7);
console.log(result);


// Задание 6
let userNumber = Number(prompt('Пожалуйста, введите любое число'));
result = userNumber ** 3
function cubeNumber(userNumber, result) {
    if (!isNaN(userNumber)) {
    return(`${userNumber} в кубе равняется ${result}`);
    } else {
    alert ('Переданный параметр не является числом');
    }
};

cubeNumber();

console.log(cubeNumber(userNumber, result));

// Задание 7
function seasonsGame() {
    let monthNumber = Number(prompt('Выберите месяц от 1 до 12'));
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
    alert ("Зима");
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert ("Весна");
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert ("Лето");
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert ("Осень");
    } else {
        alert ('Вы ввели неправильное значение');
    }
};
