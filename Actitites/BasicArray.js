//Array declaration
let myArr = [1,2,3,4,5]
console.log(`My array values : ${myArr}`)
console.log(typeof(myArr))


const arr = new Array(1,2,3)
console.log(arr[1])

//array methods
arr.push(4) //add values in array
console.log(arr)
arr.pop()  // remove last value from array
console.log(arr) 
arr.unshift(9) //shifts all element and added at 1st position
console.log(arr)
console.log(arr.shift()) //remove the 1st element from array
console.log(arr)
console.log(arr.includes(7)) //it return true if element present & false if element absent  
console.log(arr.indexOf(2)) //it return index of given element

//activity - splice ,slice and split method
console.log(arr.slice(0,3));//give elements from index 0 to 3 (0 include and 3 exclude)
console.log(arr.splice(2,1));//remove 1 element at index 2
console.log(arr);

//add element using splice
console.log(arr.splice(2,1,3));//2-start index,1-delete no of elements,3-insert 3 at index 2
console.log(arr);
//splice method adds and/or remove array elements , also overwrites the original array

//It split the string by space into array
let str = "I am studying js"
let arr1 = str.split(" ")
console.log(arr1);








