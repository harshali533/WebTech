/*
symbol is used for unique id

Q.JS is dymanic or static?

*/
const anotherId = Symbol("123")
console.log(anotherId)
console.log(typeof(anotherId))

const id = "123"
console.log(id === anotherId)

//Array
const num = [1,2,3,4,5,6]
const fruit = ['Apple','Mango','Grapes','Chiku']
console.log(num)
console.log(fruit)

//Objects - key-value pair
const obj = {
    name : 'Neha',
    age : 21
}
console.log(obj.name,obj.age)

//Functions
//Q.function declaration,definition and calling

const printname = function (){
    console.log("Neha")
}
printname()

/*
Function Declaration-->Tells JavaScript that a function exists and its name + parameters.

Function Definition-->Contains the actual code (logic) that runs when the function is called.


*/
//function declaration
function arraySum(arr){
    //function definition
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
let a = [2,3,4,1];
let result = arraySum(a);//function calling
console.log("Sum : "+result);


//memory
/*
there are 2 types of memory - stack and heap
stack - used for primitive  
heap - used for nonprimitive
primitive datatype is used for stack memory.When we assign 1 variable to another a copy is made so changing 1 does no affect another
objects are store in heap memory when we assign 1 varible to another reference is assign not value so changing 1 both changes
*/
let myNewYoutubeChannel = "NNB"
let newYoutubeChannel = myNewYoutubeChannel
console.log(myNewYoutubeChannel,newYoutubeChannel)
newYoutubeChannel = "SNB"
console.log(myNewYoutubeChannel,newYoutubeChannel)

let user1 = {
    fname : "Neha",
    age : 21,
    id : 2
}
let user2 = user1
user2.id = 20
console.log(user1.id,user2.id)
console.log(user1.fname,user2.fname);

