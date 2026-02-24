let balance = new Number(10000000000000000)
console.log(balance,typeof(balance))

console.log(balance.toString())
console.log(balance.toExponential())
console.log(balance.toFixed(2)) //when we build  that time the value is too long so we use this
console.log(balance.toPrecision())
console.log(balance.toString().length)
console.log(balance.toLocaleString())
console.log(balance.toLocaleString('en-US')) //en - english IN - india


//Math
console.log(Math.abs(-4)) //abs convert negative to positive 
console.log(Math.round(4.6)) //round figure
console.log(Math.ceil(4.6)) //select top value
console.log(Math.floor(4.6)) //select lower value
console.log(Math.min(10,2)) 
console.log(Math.max(30,45))

/*activity - Math.random()
this method generate the random number from 0(inclusive) and 1(exclusive)
0<= number <1
*/
console.log(Math.random()) //take random numbers betn 0 to 1
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);






