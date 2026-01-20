/* String */

let str1 = "Harshali"
console.log(str1);
console.log(typeof str1); // string 

/*  String interpolation */

console.log("My name is " + str1); // concatenation

// using template literals (backticks ``)
console.log(`Hello my name is ${str1}`); // string interpolation 

let name = "Robert";
console.log(`Hello ${name}`);

const gamecounter = new String("Harshali"); // we use new keyword to create string object
console.log(gamecounter.length);
console.log(gamecounter.toUpperCase());
console.log(gamecounter.charCodeAt(2)); // returns the unicode of the character of the specified index
console.log(gamecounter.indexOf("a")); // returns the index of the first occurrence of a specisied value in a string

/* Activity_02 */ //--->> chrome--> console--> write code and check outpi=ut and expand 