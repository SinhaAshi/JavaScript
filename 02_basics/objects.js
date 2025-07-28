//singleton.. way of making objects with the help of constructor
//Object.create
 //object literals
const mySym = Symbol("Key1")
 const JsUser = {
    "full name": "Ashi Sinha",
    name: "Ashi",
    [mySym]:"myKey1",//symbol ko square bracket ke andr rkhte h
    location : "Benagal",
    id: 12345,
    isLoggedIn:true

 }
 //console.log(JsUser.name);
 //console.log(JsUser["name"]);// use tjis its better for objects
 //console.log(JsUser["mySym"])

 JsUser.name = "Ashu"
 //console.log(JsUser["name"]);
//Object.freeze(JsUser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.name = "Ash"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hii");
}

JsUser.greetingTwo = function(){
    console.log(`Hii, ${this.name}`);
}

//console.log(JsUser.greeting);
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

//How to use constructor to make singleton object

const tinderUser = new Object() //singleton
//const tinderUser = {}//non-singleton

tinderUser.id = "123abc"
tinderUser.name ="Ashi"

//console.log(tinderUser)

const regularUser = {
    email:"ashi@gmail.com",
    fullname:{
        username:{
            firstname: "Ashi",
            lastname : "Sinha"

        }
    }
}
//node 02_basics/objects.jsconsole.log(regularUser.fullname.username.firstname);
// merging of objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"d", 4:"e"}
//const obj3 = {obj1,obj2}
//console.log(obj3)
const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);
//Use spread as well

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('name'));


//DESTRUCTURE

const{location: loc} = JsUser
console.log(loc);

