
// Arrow Function
const add = (a, b) => a + b;

let result = add(10, 20);
document.write(" <br>Addition:", result);

const square = (num) => num * num;

for (let i = 1; i <= 5; i++) {
    document.write("<br> Square of", i, "=", square(i));
}

const numbers = [5,6,7,8,9];

const doubled = numbers.map(num => num * 2);

document.write(" <br> Original Array:", numbers);
document.write(" <br>Doubled Array:", doubled);

const numbers1 = [10, 15, 20, 25, 30, 35];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
document.write("<br>Even Numbers:", evenNumbers);


const numbers3 = [30, 40, 50, 60];

const sum = numbers3.reduce((total, num) => total + num, 0);

document.write("<br> Sum:", sum);
