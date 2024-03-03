// Array

const myArray1 = [10, 20, 30, 40, 50]
console.log(myArray1[4]);


const myArray2 = ["FRONTEND", "BACKEND", "FULLSTACK"]
console.log(myArray2);


const myArray3 = new Array(9, 8, 7, 6, 5)
console.log(myArray3);



// Array Methods

myArray1.push(60)
myArray1.pop()
console.log(myArray1);


myArray2.unshift(24)
myArray2.shift()
console.log(myArray2);


console.log(myArray3.includes(8));
console.log(myArray3.indexOf(8));


// slice, splice

console.log("A ", myArray3);
const mynewarr1 = myArray3.slice(1, 4)
console.log(mynewarr1);
console.log(myArray3); //slice does not manipulate original array


console.log("B ", myArray3);
const mynewarr2 = myArray3.splice(1, 4)
console.log(mynewarr2);
console.log(myArray3); //splice manipulate original array



///////////////////////////////////////////////////



const tech1 = ["js", "react", "css"]
const tech2 = ["html", "nodejs"]

// tech1.push(tech2)

// console.log(tech1);
// console.log(tech1[3][1]);

// concat
// const tech3 = tech1.concat(tech2)
// console.log(tech3);



const tech4 = [...tech1, ...tech2]
console.log(tech4)



