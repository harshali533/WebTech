/* 1. slice()   */ // extract a section of an array and return it as a new array without modifying the original array.

/* Syntax:
array.slice(startIndex, endIndex)
string.slice(startIndex, endIndex)
 */

let fruits = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);
//example:
let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50]


// 2. splice()   // change the contents of the array by removing or replacing existing elements and/or adding new elements in places.
/* Syntax:
array.splice(startIndex, deleteCount, item1, item2, ...)
 */

// Remove elements:
let arr1 = [1, 2, 3, 4, 5];

arr1.splice(2, 2);

console.log(arr1); // [1, 2, 5]


//Add elements:
let arr2 = [1, 2, 5];

arr2.splice(2, 0, 3, 4);

console.log(arr2); // [1, 2, 3, 4, 5]

//Replace elements:
let arr3 = [1, 2, 3, 4];

arr3.splice(1, 2, 99, 100);

console.log(arr3); // [1, 99, 100, 4]


// 3. Split()  // divide a string into an array of substrings based on a specific  separator and returns the new array.
/* Syntax:
string.split(separator, limit)
*/
let text = "I love JavaScript";

let words = text.split(" ");

console.log(words);
// ["I", "love", "JavaScript"]
