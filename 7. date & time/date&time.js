// Dates

let yourDate = new Date()
console.log(yourDate.toString())
console.log(yourDate.toDateString())
console.log(yourDate.toLocaleString())
console.log(typeof(yourDate))

let myDate1 = new Date(2024, 0, 17)
console.log(myDate1.toDateString())

let myDate2 = new Date(2024, 0, 17, 10, 0)
console.log(myDate2.toLocaleString())

let myDate3 = new Date("2024-01-18")
console.log(myDate3.toLocaleString())

let myDate4 = new Date("01-19-2024")
console.log(myDate4.toLocaleString())





let myTimeStamp = Date.now()

console.log(myTimeStamp)

console.log(myDate4.getTime())


console.log(Math.floor(Date.now()/1000))





let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {

    weekday: "long",


})