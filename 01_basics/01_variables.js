const accountId = 144553
let accountEmail = "avinash@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ak@av.com"
accountPassword = "21212121"
accountCity = "Raipur"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functiponal scope
 */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
