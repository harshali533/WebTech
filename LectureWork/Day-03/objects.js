let MyObj = {   //<<---- object literal (key value pairs)
    name: "johan",
    age: 23,
    location: "new york",
    emailid: "johan@gmail.com",
    islogin: false,
    logindate: ["tue", "wed", "fri"],
    "fullname": "harshali",
    mySymbol: "12hhbs"
}
// there are two types of object: 1)object literal 2)object constructor 3)singleton object.
// when you create constructor it its create singleton obj, it means itself object.
// when we create object it will not create singleton and when constructor there is singleton object created.
console.log(MyObj.emailid)
console.log(MyObj.fullname)

let mySymbol = Symbol("mySymbol1"); //<<---- symbol as key
console.log(mySymbol);
console.log(typeof mySymbol);
console.log(typeof (MyObj.mySymbol));

const mySymbol1 = Symbol("mySymbol1");
const object2 = {
    [mySymbol1]: "harshali"
}
console.log(typeof(object2[mySymbol1]))
console.log(object2);
console.log(typeof(object2));

MyObj.emailid = "harshali@gmail.com";
console.log(MyObj.emailid);
// Object.freeze(MyObj);

MyObj.emailid = "gvdbxsjnkb@gmail.com";
console.log(MyObj.emailid);

MyObj.greeting = function() {  //<<---- method
    console.log("hello JS user");
}
MyObj.greeting();
// print function
console.log(MyObj.greeting()); //<<---- prints undefined as there is no return statement in greeting

/* will ask any interview QUE's in viva */