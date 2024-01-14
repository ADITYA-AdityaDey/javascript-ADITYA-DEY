const name = "ADITYA DEY"
const mySemester = 3

// console.log(name + mySemester + "2nd year")


// STRING INTERPOLATION
console.log(`HELLO MY NAME IS ${name} AND MY SEMESTER IS ${mySemester}`)


// ANOTHER WAY TO DECLEARE STRING
const programminglang = new String('javascript')


// access through key value pair
console.log(programminglang[0])
console.log(programminglang[3])


// ACCESS PROTOTYPE METHOD
console.log(programminglang.length)
console.log(programminglang.toUpperCase())
console.log(programminglang.charAt(5))
console.log(programminglang.indexOf('v'))


// SubString
const SubString = name.substring(0, 5)
console.log(SubString);


// slice
const slicestring = name.slice(-9, 5)
console.log(slicestring);


// trim
const anotherString = "        trim@js          "
console.log(anotherString)
console.log(anotherString.trim())


// replace
const uniformResourceLocator = "https://javascript.abc/stringreplace%20method"

console.log(uniformResourceLocator.replace('%20', '-'))


// includes
console.log(uniformResourceLocator.includes('javascript'))
console.log(uniformResourceLocator.includes('dsa'))


// split
const splitmethod = "javascript-split-method-in-string"
console.log(splitmethod.split('-'))