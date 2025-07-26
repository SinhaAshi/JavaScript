const accountId = 12345 // cannot be changed
let accountEmail = "ash12@g.com" //best way for variables and can be changed
var accountPass = "123" //dont use this for variables as because it creates issue in block scope and functional scope
accountCity = "Jaipur" //its a bad practise so try to avoid it 
let accountState;//if we dont assign a value it will remain undefined
 console.log(accountId);
 console.log(accountState);
 console.table([accountId, accountEmail, accountPass, accountCity])