// Задание 1

function getResult(arr, callback) {
    return callback(arr);
}

function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function mult(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1);
}

console.log(getResult([3, 4, 1, 9], sum));
console.log(getResult([3, 4, 1, 9], mult));





// Задание 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];


function sortUsers() {
    return users.sort((a, b) => a.age - b.age);
}
	
console.log(sortUsers(users));



// Задание 3

function each(arr, callback) {
    return callback(arr);
}

function reversArr(arr) {
    return arr.reverse();
}

function toNumberArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
if (isNaN(arr[i])) {
arr.splice(i, 1);
i--;
}
}
return arr;
}

console.log(each([1, '4', 9, 'two'], reversArr));
console.log(each([1, '4', false, 9, 'two'], toNumberArr));


// Задание 4

const interval = setInterval(() => {
        let currentDate = new Date();
        console.log(currentDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло!');
    }, 30000);


// Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps() {
    console.log('Идут гудки...');
    setTimeout(() => {
    console.log('Разговор');    
    }, 1000);
}

function talk() {
    console.log('Разговор');
}

calling();
beeps();
// talk();