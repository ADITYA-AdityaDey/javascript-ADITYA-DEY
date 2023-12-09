let score = "ADITYA DEY"

console.log(typeof score);
console.log(typeof (score)); // (score)

let valueInNumber = Number(score) // CONVERT STRING INTO NUMBER

console.log(typeof valueInNumber); // OUTPUT IS NUMBER
console.log(valueInNumber); // OUTPUT NaN

// "50" => 50
//"50abc" => NaN
// true => 1; false => 0

let isLoggedIn = "ADITYA DEY"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); //OUTPUT true

// 1 => true ; 0 => false
// "" => false
// "ADITYA DEY" => true

let someNumber = 60
let stringNumber = String(someNumber) // CONVERTING NUMBER INTO STRING
console.log(typeof stringNumber); // OUTPUT string

// 60 => String


// ******************** OPERATIONS ***********************

let value = 10
let negValue = -value
console.log(negValue); // OUTPUT -10

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 ** 10);
console.log(10 / 10);
console.log(9 % 10);

let str1 = "ADITYA"
let str2 = " DEY"


let str3 = str1 + str2

console.log(str3); // OUTPUT ADITYA DEY

console.log("1" + 2); // OUTPUT 12
console.log(1 + "2"); // OUTPUT 12
console.log("1" + "2"); // OUTPUT 12

console.log("1" + 2 + 2); // OUTPUT 122
console.log(1 + 2 + "2"); // OUTPUT 32

console.log((3 + 4)*(5 % 3)); // OUTPUT 14

console.log(+true); // OUTPUT 1
console.log(+""); // OUTPUT 0

// let num1, num2, num3
// num1 = num2 = num3 = 100      // AVOID THIS TYPE OF CODE WRITING
// console.log(num1, num2, num3);


let gameCounter = 500
++gameCounter; //INCREMENT VALUE BY 1 OR ADD(+) 1  (500 => 500+1 => 501)
console.log(gameCounter);