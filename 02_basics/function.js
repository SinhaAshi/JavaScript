function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");

}
//sayMyName()///execution
/*function addTwoNumbers(number1, number2){//number1 and number2 are parameters
    //return number1+number2
}*/
//console.log(addTwoNumbers(3,4)) // 3 and 4 are arguments
//second way
function addTwoNumbers(number1, number2){//number1 and number2 are parameters
    console.log(number1+number2)
}
addTwoNumbers(3,4)

function loginUse(username){
    return `${username} just logged in`
}
console.log(loginUse()) //it will give undefined

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400,500))

//objects in function

const user ={
    username :"Ashi",
    id:123

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)
}
//handleObject(user)


//array in function
const myArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));