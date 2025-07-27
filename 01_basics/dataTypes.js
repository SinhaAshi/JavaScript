"use strict"; //no need to write this now-a-days but it is used to treat all JS code as newer version
// alert(3+3) //if we used browser or integrated js in a html file then a pop up would have shown 6 but it doesnt happen in node
let name = "Ashi"
let age = 21
let isPresent = true
let state;
let city = null;
console.log(typeof undefined);
console.log(typeof name);``
console.log(typeof NaN);

//datatypes
//primitive--int, big int, NaN, string, boolean, 
//non-primitive---object,array,function

//stack(premitive types, copy of the data is provided) , heap(non-primitive types, refrence of the data is provided)
let myName = "ashi";
let anotherName = myName;
anotherName="ashu";
console.log(myName);
console.log(anotherName);

let userOne = {
    userID : 1234,
    userName: "Ashi"

}
let userTwo = userOne
userTwo.userID=321
console.log(userOne);
console.log(userTwo);