// Задание 1

let i = 0;
while (i < 2) {
    console.log('Привет');
i++;
}

// Задание 2
let number = 1;
while (number <= 5) {
    console.log(number);
number++;
}


// Задание 3
number = 7;
while (number >= 7 && number <=22) {
    console.log(number);
number++;
}

// Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};

for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);
}

// Задание 5
let n = 1000;
let num = 1;
while (n >= 50) {
  console.log(n);
  n /= 2; // n = n / 2;
  console.log(num);
  num++;
}
        

// Задание 6
for (let Friday = 5; Friday <= 31; Friday += 7) {
    alert(`Сегодня пятница, ${Friday}-е число. Необходимо подготовить отчет.`);
}