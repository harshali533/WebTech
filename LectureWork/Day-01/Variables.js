/* const a =10;
const a = 20;
console.log(a);  */// this will throw an error due to redeclaration of constant var 'a

/* var a = 200; //----->old way of declaring variable
let ab = 300; //----->new way of deaclaring variable

console.log(a);
console.log(ab);

a=200; // reassigning value to var 'a'
ab=400;// reassigning value to let 'ab'
console.log(ab); */

var a =10; // Declare variable 'a' using var (function/global scoped)
let ab = 20; // Declare variable 'ab' using let (block scoped)

// Create a block scope
{
   // Re-declare 'a' using var
  // Since var is NOT block scoped, this changes the outer 'a'
    var a =200;

   // Declare a new block-scoped variable 'ab'
  // This 'ab' exists ONLY inside this block
    let ab = 100;

  // Prints values inside the block
  // a -> 200 (updated globally)
  // ab -> 100 (block-scoped variable)
    console.log(a, ab);
}//-----> block scope


// Prints values outside the block
// a -> 200 (changed by var inside block)
// ab -> 20 (original value, block 'ab' is destroyed)
console.log(a, ab); // here both 'a' and 'ab' will be accessible as they were modified in the block scope but not redeclared
