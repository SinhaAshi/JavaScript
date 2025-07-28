const myArr = [0,1,2,3,4,5,true, "ashi"]
const myHeroes = ["shaktiman","naagraj"]
const myArray = new Array(1,2,3,4)
//console.log(myArr[1]);

//Array Methods
//myArr.push(6)
//console.log(myArr);
//myArr.pop();
//console.log(myArr);

//myArr.unshift(9) adds no in the start
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3))

//const newArr = myArr.join()//adds all the elements of a array to string
//console.log(newArr);

//SLICE AND SPLICE

//console.log("A", myArr);//original array

//const myn1 = myArr.slice(1,3)
//console.log(myn1)
//console.log("B", myArr);//array after slicing ..no changes

//const myn2 = myArr.splice(1,3)
//console.log(myn2);
//console.log("C", myArr);// array after splicing

//PUSH
myArr.push(myHeroes)// change krta h existing array ko 
//console.log(myArr); // Appends new elements to the end of an array, and returns the new length of the array.

//Concat...change nii krta h existing array ko
const newAray = myArr.concat(myHeroes)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//console.log(newAray);

//spread...zyada array add kr skte h
const all_new_heroes = [...myArr, ...myHeroes]
//console.log(all_new_heroes);

const another_arr = [1,2,3,[4,5,6],7,8,9]
const real_arr= another_arr.flat()//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(another_arr);
console.log(real_arr);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) //returns an empty object