// Задание 1

let numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) break;
    console.log(numbers[i]);
}


// Задание 2
let numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));
    

// Задание 3
numbs = [1, 3, 5, 10, 20];
    numbs = numbs.join(' ');
    console.log(numbs);


// Задание 4
let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
console.log(arr);


// Задание 5
numbers = [1, 1, 1];
numbers.push(2);
numbers.push(2);
numbers.push(2);
console.log(numbers);


// Задание 6
let sortNumbers = [9, 8, 7, 'a', 6, 5];
sortNumbers = sortNumbers.sort();
console.log(sortNumbers.pop());
console.log(sortNumbers);


// Задание 7
numbers = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите любое число от 1 до 10'));
let search = numbers.includes(userNumber);
console.log(search);


// Задание 8
let letters = 'abcdef';
letters = letters.split('');
console.log(letters);
letters.reverse();
console.log(letters);
letters = letters.join('');
console.log(letters);


// Задание 9
const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];
const all = [...firstNumbers, ...secondNumbers];
console.log(all);


// Задание 10
numbers = [1, 3, 5, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


// Задание 11
let randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

console.log(randomArray(10, 10));

let evenNumbers = randomArray();
evenNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers);



// Задание 12
