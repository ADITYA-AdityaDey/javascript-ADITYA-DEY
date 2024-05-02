// const appUser = new Object()
const appUser = {};

appUser.id = "1a2b3c"
appUser.name = "JS"
appUser.isLoggedIn = false


// console.log(appUser)


const anotherAppUser = {
    email : "a1b2c3@email.com",
    fullName: {
        userFullName: {
            firstName: "ADITYA",
            lastName: "DEY"
        }
    }
}

console.log(anotherAppUser.fullName.userFullName.firstName)