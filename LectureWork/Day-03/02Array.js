const supperheros = [
    "Spiderman",
    "Ironman",
    "Hulk",
    "Thor",
    "Captain America",
    "Black Window",
    "Doctor Strange"
];

const villains = [
    "Thanos",
    "Loki",
    "Green Goblin",
    "Red Skull"
];

supperheros.push(villains);

console.log(supperheros);

console.log(supperheros[3]); // Thor
console.log(supperheros[7][2]); // Green Goblin

/* Array Concatenation */

const allHeroes = supperheros.concat(villains); // Concatenating two arrays
console.log(allHeroes);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]],6,7,8,[4,5,6,7]];
console.log(arr1);

const arr2 = arr1.flat(Infinity); // Flattening the nested array, use of infinity to flattens all levels no matters how deep the nesting is
console.log(arr2);

const arr3 = arr1.flat(1); // flattening the nested array by 1 level, use of flat method is how should 
console.log(arr3);

// flat does not change the original array it returns new array usful when dealing with nested arrays.
// Data Scripting using this methods--->>>

console.log(Array.isArray("harshali")); // false, check given data is array or not

console.log(Array.from("harsshali")); // creates an array from the given string
// convers an itterable object into an array.
// Output: ['h', 'a]

console.log(Array.from({name: "harshali"})); 
console.log(Object.keys({name: "harshali"}));
console.log(Object.values({name: "harshali"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments or array no matters how many 
// Array.of() is converts values into array
// Array.of is  converts iterabtables into array

/*  IMP--->> function, string, array  ----VIVA  */