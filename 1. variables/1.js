const user1Id = 1111
let user1Email = "user1Email@gcom"
var user1Password = "ABCDE"
user1City = "KOLKATA"

// user1Id = 2222 NOT ALLOWED
user1Email = "user1Email@com"
user1Password = "MNOPQ"
user1City = "BENGALURU"
let user1State;



console.log(user1Id);
console.table([user1Id, user1Email, user1Password, user1City, user1State])


/*
PREFER NOT TO USE VAR
BECUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/