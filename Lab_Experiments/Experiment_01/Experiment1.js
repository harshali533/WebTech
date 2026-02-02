/* ACTIVITY_01 (var, let, const behavior)*/

// const cannot be redeclared or reassigned
// const a = 10;
// const a = 20; // Error

// Using var and let correctly
var a = 200;        // var → function/global scoped old way 
let ab = 300;       // let → block scoped new way 

document.write(a);     // 200
document.write(ab);    // 300

// Reassignment is allowed for var and let
a = 250;
ab = 400;

document.write(a);     // 250
document.write(ab);    // 400

// var CAN be redeclared
var a = 10;
document.write(a);     // 10

// let CANNOT be redeclared in same scope
// let ab = 20;     // Error


/* ACTIVITY_02
   Block Scope Demonstration */

// Outer variables
var x = 50;
let y = 60;

{
    // var is NOT block scoped → affects outer variable
    var x = 100;

    // let is block scoped → exists only inside this block
    let y = 200;

    document.write("Inside block:", x, y); // 100 200
}

// Outside the block
document.write("Outside block:", x, y);   // 100 60


/* ---> ACTIVITY_03 <--- */

// JavaScript Data Types

// 1] Primitive Data Types (7 types)

// a) Number
let num = 42;
document.write("Number:", num, "Type:", typeof num, "<br>");
document.write("Number:", num, "Type:", typeof num);

// b) String
let str = "Hello, World!";
document.write("String:", str, "Type:", typeof str);
// c) Boolean
let bool = true; // or false
document.write("Boolean:", bool, "Type:", typeof bool);

// d) Undefined
let undef; // variable declared but not assigned
document.write("Undefined:", undef, "Type:", typeof undef);

// e) Null 
let nul = null;
document.write("Null:", nul, "Type:", typeof nul); // Note: typeof null returns 'object' due to a historical bug in JavaScript
// f) Symbol
let sym = Symbol("unique");
document.write("Symbol: " + sym.toString() + "<br>");
document.write("Type: " + typeof sym);


// g) BigInt
let BigInt = 9007199254740991n;
document.write("BigInt:", BigInt, "Type:", typeof BigInt);
document.write("BigInt:", BigInt, "Type:", typeof BigInt);

// 2] Non-Primitive Data Types

// a) Object
let obj = { name: "Harsh", age : 20};
document.write("Object:", obj, "Type:", typeof obj);

/* ACTIVITY_04 */
// Display student information

let stdname = "Harshali";
let stdage = 20;
let stdCourse = "B.Tech - AIML";
let stdCollege = "DKTE Society's Textile and Engineering Institute, Ichalkaranji";
let stdMail = "harshalikamble.hli@gmail.com"



document.write("Student Name:", stdname);
document.write("Student Age:", stdage);
document.write("Student Course:", stdCourse);
document.write("Student College:", stdCollege);
document.write("Student Email:", stdMail);


/* ACTIVITY_05 */
// Q. check number is even or odd

//let number = 15;
let number = prompt("Enter a number:")

if(number % 2 === 0){
    document.write(number + " is an Even number,");
}
else{
    document.write(number + " is an odd number,");
}

/* ACTIVITY_06 */
// Q. print pattern

let n = 5; // number of rows

for(let i=1; i<=n; i++){
    let pattern = " *";
    document.write(pattern.repeat(i));

}

/* ACTIVITY_07 */
// Q. Check student pass or fail

let marks = prompt("Enter your marks:");

if(marks >= 40){
    document.write("Congratulations! You have passed the exam.");
}
else{
    document.write("FAil...")
}

/* ACTIVITY_08 */
// Q. print number from 1 to 10

for(let i=1; i<=10; i++){
    document.write(i);
}

