//Immediately Invoked Function Expressions (IIFE) used to remove the pollution create due to global scope or in short for instant EXECUTION
//syntax---(intialize the function inside it)(its used for execution)

(function chai(){
    //this is a named iife
    console.log("DB CONNECTED")
})(); //THE SEMICOLON IS NECESSARY  TO STOP THE CONTEXT

(() =>{
    console.log("DB CONNECTED")
})();

((name) =>{
    console.log(`DB CONNECTED ${name}`)
})("ashi");