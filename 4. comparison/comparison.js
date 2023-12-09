console.log(10 > 5);
console.log(10 >= 5);
console.log(10 < 5);
console.log(10 == 5);
console.log(10 != 5);


console.log("10" > 5); //DIFFERENT DATA TYPES

// THIS TYPES OF CONVERSION MUST AVOID
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

/*
EQUALITY CHECK == AND COMPARISONS > < <= <= WORK DIFFERENTLY
COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0
THAT'S WHY null>=0 is true AND null>0 IS FALSE
*/




// ===   (=== check strictly, === NOT ALLOWED TWO DIFFERENT DATA TYPES FOR COMPARISON)
console.log("10" === 10);