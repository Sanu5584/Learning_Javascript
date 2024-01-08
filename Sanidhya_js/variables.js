const accountID = 144634
let accountEmail = "sanu558@gmail.com"
var accuntPasssword = "123456"
accountCity = "Rajkot"
let accountState; 

// accountID = 2 which is not allowed

accountEmail = "hc@hc.com"
accuntPasssword = "45646543"
accountCity = "Kailash"

console.log(accountID);  /* It is very compliated to to print all the variables one by one ,to improvwthis we write
                            in another method */  

 console.table([accountEmail, accountID, accountCity, accuntPasssword, accountState])
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/