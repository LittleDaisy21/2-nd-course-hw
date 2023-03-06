// Задача 1
let a = 10; 
alert (a); 
a = 20;
alert (a); 

// Задача 2
let iphone = 2007; 
alert (iphone);

// Задача 3
let javascript = 'Brendan Eich'
alert (javascript);

// Задача 4
let firstNumber = 10;
let secondNumber = 2;
alert(firstNumber + secondNumber);
alert(firstNumber - secondNumber);
alert(firstNumber * secondNumber);
alert(firstNumber / secondNumber);

// Задача 5
let result = 2**5
alert(result);

// Задача 6
a = 9;
let b = 2;
result = a % b;
alert(result);

// Задача 7
let num = 1;
num += 5; // num = num + 5
num -=3; // num = num - 3
num *= 7; // num = num * 7
num /= 3; // num = num / 3
num += 1; // num = num + 1
num -= 1; // num = num - 1
alert(num);

// Задача 8
let age = Number (prompt("Сколько вам лет?"));
alert(age);

// Задача 9
let user = {
    name: 'Mariia',
    age: 28,
    isAdmin: true
}
console.log(user);

// Задача 9.1
user.cityOfResidence = 'Netherlands';
console.log(user);

// Задача 9.2
user.age = 30;
console.log(user);

// Задача 9.3
delete user.cityOfResidence;
console.log(user);

// Задача 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задача 10
let username = prompt("Как вас зовут?");
alert(`Привет, ${username}!`);