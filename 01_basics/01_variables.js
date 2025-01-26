const accountId=144553
let accountEmail="samsumer@gmail.com"
var accountPassword='12345'
accountCity="Bhagalpur"

// accountId=2 // not allowed 

accountEmail="sam@.com"
accountPassword="121212"
accountCity="Bangalore"
accountState=12;

console.log(accountId);

/*
Prefer not to use var
becuase of issue in block scope and funtional scope

*/
console.table([accountId,accountEmail,accountPassword,accountState])
