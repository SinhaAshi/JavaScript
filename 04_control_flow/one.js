//if

if(true){
   // get inside this
}
// if (balance > 500) console.log("test"), console.log("test2");//bad practise

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2==3){
    console,log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}


//switch case syntax 
/* switch(key) {
case value:
    break;
    default:
        break;
        }*/
const month = 3
switch(month) {
case 1:
    console.log("jan");
    break;
case 2:
    console.log("feb");
    break;
    default:
        break;
        }
//Falsy values 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN...rest all are true values
const userName =""
if(userName){
    console.log("logged in")
}
else{
    console.log("Not logged in")
}
//truthy value 
//"0", 'false', " " (quotation with space betwen them), [], {}, function(){}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//nullish coalescing operator (??) : null undefined

let val1;
//val1 = 5??10
//val1 = null?20
console.log(val1)//humesha pehle wala hi assign hota h but two values are provided because if the first one comes out to be null/undefined then it can be adjusted with the second value
//terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")
