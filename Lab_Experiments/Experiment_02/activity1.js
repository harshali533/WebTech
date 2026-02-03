// declare objects, array,string, function

//declare string:
let str = "Hello World";

//Declare array:
let subjects = ["Java", "Python", "JavaScript"];


//declare object:
let student = {
    name: "Harshali",
    age: 20,
    course: "AIML"
};

// declare functions:
function greet(){
    console.log("Hello, Welcome to JavaEcript!");
}
greet();

//function with parameters
function add(a,b){
    return a + b;
}
console.log("Sum:", add(5,10));

//function as expression
let multiply = function(a,b){
    return a * b;
}
console.log("product:", multiply(5,10));
