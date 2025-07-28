const user = {
    username:"hitesh",
    price:99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the course`);//this keyword is used for the current context and it cannot be used in a function
    }

}
//user.welcomeMessage()
//user.username = "Ashi"
//user.welcomeMessage()

console.log(this); // it will give an empty object

function apple (){
    console.log(this);
}
const chai = function(){
    console.log(this);
}
const code = ()=>{
    console.log(this);
}


//arrowFunction ()=>{}
const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4))

//implicit return
//const addTwo = (num1, num2) => num1 + num2 // if u dont use curly braces then theres no need to use return
//const addTwo = (num1, num2)=>({username: "hitesh"}) //if we dont wrap the object inside() then it wont return