const accountId = 23487
var accountEmail = "om@gmail.com"
let accountPass = "12345"
accountCity = "goa"
let accountState
//accountId = 52 can't be changed

/* var and let can be changed
never use var as it don't understand scopes......
*/
accountEmail = "hello@gmail,com"
accountPass = "14589"
accountCity = "MUMBAI"

console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])