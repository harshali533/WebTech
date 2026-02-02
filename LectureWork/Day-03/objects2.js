const user = new Object();
const user1 = {  //<<---- non singleton object

}
user1.id = 123;
user1.name = "jhsx";
user1.islogin = true;
console.log(user1);

//object inside the object

const user3 =  {
    email: "ghgcfxfghgjkhlhkgjhgc",
    usrname: {
        fullname:{fname: " ", sname: " "}
    }
}
console.log(user3);
console.log(user3.usrname.fullname.sname);
