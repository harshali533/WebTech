//object literals - key value pair
let myObj = {
    name : "Neha",
    age : 21,
    location : "Hupari",
    email :"neha@gmail.com",
    isLogin : true,
    lastLoginDay : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "full Name" : "Neha Bongarde"

}
/*
there are 3 way to declare of object -
object literal-
constructor
singleton
when u create constructor it create singleton object it means itself object
when we create object literal it will not create singleton
*/

console.log(myObj.email)
console.log(myObj.fullName)

//console.log(myObj)

//Symbol
const mySymbol = Symbol("Neha")
const myObj2 = {
    [mySymbol] : "Bongarde"
}
console.log(typeof(myObj2))
console.log(myObj2)

myObj.email = "neha6@gmail.com"
console.log(myObj.email)

//Object.freeze(myObj)
myObj.email = "neha64@gmail.com"
console.log(myObj.email)

myObj.Greeting = function() {
    console.log("Hello JS user")
}

console.log(myObj.Greeting())

