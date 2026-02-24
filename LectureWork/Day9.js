// Synchronous
//1)code execute line by line
//2) each task wait for the previous one to complete before executing (locking in nature).
//3) javaScript is by default Synchronous and single-threaded, meaning it can only execute one task at a time.

console.log("Start");

const add = (a, b) => {
    return a + b;
}
let result = add(2, 3);
console.log("Result: " + result);

console.log("End");


// Asynchronous Programming
//1) some task take time like API calls, file reading, etc. and we don't want to block the main thread while waiting for these tasks to complete.
//2) JS does not wait it moves o next line of code and have non blcoking nature.
//3)used in featching data from server, reading files, setTimeout, API calls etc.
//4)SetTimeout is Asynchronus it wait for the specified time and then execute the callback function without blocking the main thread.


setTimeout(() => {
    console.log("This is an asynchronous task");
}, 2000);

console.log("End");


/*
ACTIVITIES ===>>>
    1) guess the output game
    2) blocking vs non-blocking code examples
    3) where exactly Synchronous and Asynchronous code is used in real world applications
    *4) API fetching example using fetch() or XMLHttpRequest
*/