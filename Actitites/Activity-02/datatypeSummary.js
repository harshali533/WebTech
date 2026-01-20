/* Non-Permitive */

//Symbol--> unique ID then use it
let anotherId = Symbol("123");
console.log(anotherId); 
console.log(typeof anotherId)
const ID = Symbol("123");
console.log(ID == anotherId); // false