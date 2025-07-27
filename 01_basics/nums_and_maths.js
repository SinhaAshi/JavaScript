const marks = 98 //it will return number
console.log(marks);

const score = new Number(100) //it will return object
console.log(score);

console.log(score.toString());
console.log(score.toFixed(1)); //decimal ke baad kitna chahiye 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


///Maths
console.log(Math);
console.log(Math.abs(-4));
//Math.min
//Math.round
//Math.floor 
//Math.min
console.log(Math.random())//always gives value between 0 and 1
console.log((Math.random()*10)+1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)))