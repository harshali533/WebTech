//COUNT VOWELS IN STRING
/* let str = "Harshali";
let count = 0;
let vowels = "aeiouAEIOU";

for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
}
console.log("Number of vowels:", count); */

                     //or

let str = "Harshali";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
}

console.log("Vowel count:", count);
