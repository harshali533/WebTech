// Find missing number in an array

let arr = [1,2,4,5,];
let n = 5;
let sum = 0;
let totalSum = (n * (n + 1)) / 2; // formula for sum of first n natural nums

for(let i=0; i<arr.length; i++){
    sum += arr[i];
}

let missingNum = totalSum - sum;
console.log("Missing number is:", missingNum)

