// Singleton
    //Object.create



// Object Lterals

const mySym = Symbol("key1")

const user1 = {
    name: "ADITYA",
    age: 20,
    [mySym]: "myKey1",
    location: "KOLKATA",
    email: "xyz@abc.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]
}

console.log(user1.name)
console.log(user1["name"])
console.log(user1[mySym])

user1.email = "abc@xyz.com"
// Object.freeze(user1)
user1.email = "abcd@xyz.com"
console.log(user1)



user1.greeting = function() {
    console.log("HELLO user1")
}

console.log(user1.greeting())



user1.greetingTwo = function() {
    console.log(`Hello user1 ${this.name}`)
}

console.log(user1.greetingTwo())