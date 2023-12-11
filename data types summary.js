// PRIMITIVE TYPES

// 7 TYPES OF PRIMITIVE DATA TYPES
//( String, Number, Boolean, null, undefined, Symbol, BigInt)

// String
const userName = "ADITYA DEY"


// Number
const score = 10
const scoreValue = 60.8


// Boolean
const isLoggedIn = false


// null
const currentTemp = null


// undefined
let userEmail;

//Symbol
const id1 = Symbol('12345') 
const id2 = Symbol('12345')

// SYMBOL CREATE BOTH UNIQUE
console.log(id1 === id2); // OUTPUT false


// BigInt
// const bigNumber = 12345678912345546n




//                    ----------------------------------------




// REFERENCE TYPE (NON PRIMITIVE TYPE)

// ( Array, Objects, Functions)

// Array
const skill = ["MERN STACK", "FRONTEND", "BACKEND"]


// Objects
let myObj = {

    Name: "ADITYA DEY",
    Country: "INDIA",

}


// Functions
const myFunction = function() {
    console.log("JAVASCRIPT");
}






// #####################################################


// HOW TO KNOW DATA TYPE
// console.log(typeof );
console.log(typeof id1);
console.log(typeof currentTemp);
console.log(typeof skill);