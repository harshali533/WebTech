/* Non-Permitive */

//Symbol--> unique ID then use it
let anotherId = Symbol("123");
console.log(anotherId); 
console.log(typeof anotherId)
const ID = Symbol("123");
console.log(ID == anotherId); // false <--- because both are unique

// java script is dynamic

/* Array */
let myArray = ["ram", "shyam", "hari"];
console.log(myArray);


let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
console.log(typeof numberArray); //object

/* Object */

// key value pairs {}

let person ={
    name: "ram",
    age: 22
}
console.log(person);
console.log(typeof person); // object

/* Functions */

// function is  a block of code designed to perform a particular task.
// function declaration means defining a function with the function keyword.
// we call the function by its name. 
 function greet(){ // this is how we declare a function
    console.log("Hello Everyone");// this is function body
 }
 const greeting = greet(); // calling the function
 console.log(typeof greet); // function