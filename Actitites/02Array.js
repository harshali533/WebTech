const superHeroes = ["Doreman","Bheem","Hattori"]
const fruit = ["Apple","Cherry","Mango"]
superHeroes.push(fruit)
console.log(superHeroes)

console.log(superHeroes[2])
console.log(superHeroes[3])
console.log(superHeroes[3][2])

//array concat
const car = ["BWM","Audi","Thar"]
console.log(superHeroes.concat(car)) //add the all element from car to superHeroes

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //nested array
console.log(anotherArray)

const anotherArray1 = anotherArray.flat(Infinity) //it not show array inside array
console.log(anotherArray1)

const anotherArray2 = anotherArray1.flat(1)
console.log(anotherArray2)

//how the nested array flatten specify default value 1 - flatten all level no matter how deep

//flat does not change original array it return new array useful when working with nested array

//data scripting using this methods
console.log(Array.isArray("Neha")) //use string so false
console.log(Array.isArray(anotherArray))

console.log(Array.from("Neha")) //convert an iterativiable objects like string,set,map into array
console.log(Array.from({Name : "Neha"}))
console.log(Object.keys({Name : "Neha"}))
console.log(Object.values({Name : "Neha"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // create value from 
//Array.of - converts values into array
//Array.from - converts the objects like string,set into array
console.log(Array.from([1,2,3,4,4,5,5,6]))
console.log(Array.from([1,2,2,3,4])) //set

console.log(Array.from([["Age",21],["City","Kolhapur"]]));//map



