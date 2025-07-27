//DATES
//Date is a object
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
//let myCreatedDate = new Date(2023, 0, 23);//first month is counted as 0
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());
 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime())
 console.log(Date.now()/1000);

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth() +1);
 console.log(newDate.getDate());
 newDate.toLocaleString('default',{
    weekday: "long"
 })