const yourScore = 100
console.log(yourScore)

const yourBalance = new Number (10000)
console.log(yourBalance)


console.log(yourBalance.toString())
console.log(yourBalance.toString().length)
console.log(yourBalance.toFixed((2)))


const anotherNumber = 90.9876
console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'))



////////////////// Maths /////////////////////////

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(25.6))
console.log(Math.ceil(10.3))
console.log(Math.floor(10.3))
console.log(Math.max(54, 21, 2, 4, 56))
console.log(Math.min(54, 21, 2, 4, 56))


console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)