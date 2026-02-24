//Singleton object
const user = new Object()
console.log(user)

const user1 = {} //non-singleton object
user1.id = 12
user1.name = "Neha"
user1.islogin = true
console.log(user1)

//nested object
const user2 = {
    email : "neha@gmail.com",
    userName : {
        fullName : {
            fName : "Neha",
            lName : "Bongarde"
        }
    }
}
console.log(user2)
console.log(user2.userName.fullName.fName)