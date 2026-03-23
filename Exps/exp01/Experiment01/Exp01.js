//Activity 01

let x = 9;
const y = 3.14;//only once declaration and value can't be changed
var z = 8;//Not recommended

console.log("let:" +x);
document.write("let: "+x+"<br>");
console.log("const:" +y);
document.write("const: "+y+"<br>");
console.log("var:" +z);
document.write("var: "+z+"<br>");

//Activity 02

var a = 10;
// Here a is 10

{
var a = 2;
// Here a is 2
}

console.log("(var)Value is changed which is: "+a)// Here a is 2
document.write("(var)Value is changed which is: "+a+"<br>");

let b = 10;
// Here b is 10

{
let x = 2;
// Here b is 2
}

console.log("(let)Value is not changed which is: "+b)// Here a is 2// Here b is 10
document.write("(let)Value is not changed which is: "+b+"<br>")// Here a is 2// Here b is 10

//Activity 03
let name = "Harshada Keste";
let age = 20;
let div = "A";
let cgpa = 9.0;
let pass = true;
let today = new Date();

console.log("Student Information: as per today--" +today);
document.write("Student Information: as per today--" +today+"<br>");
console.log("Name: "+name);
document.write("Name: "+name+"<br>");
console.log("Age: "+age);
document.write("Age: "+age+"<br>");
console.log("Division: "+div);
document.write("Division: "+div+"<br>");
console.log("CGPA: "+cgpa);
document.write("CGPA: "+cgpa+"<br>");
console.log("Academic status: "+pass);
document.write("Academic status: "+pass+"<br>");

//Activity 04
let num = 8;
if(num % 2 == 0){
    console.log("Number "+num+" is even");
    document.write("Number "+num+" is even"+"<br>");
}
else{
    console.log("Number "+num+" is odd");
    document.write("Number "+num+" is odd"+"<br>");

}

//Activity 05
let marks = 90;
if(marks >= 35){
    console.log("Student is pass");
    document.write("Student is pass"+"<br>");
}
else{
    console.log("student is fail");
    document.write("student is fail"+"<br>");
}

//Activity 06
for(let i = 0; i < 11; i++){
    console.log(i);
    document.write(i+"<br>");
}


