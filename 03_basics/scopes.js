function one(){
    const username ="ashi"
    function two(){
        const website = "youtube"
        console.log(username);//two is the child of one so it can take anything from its parents but one cant
    }
    //console.log(website);//website is under two so it cannot be accessed out of it
    two()
}
one()

//int this declaration we can give refrence on the top as well
//addone(5)
function addone(num){
    return num + 1
}
console.log(addone(5))
//depends how you are declaring function
//in this we cannot give refrence without declaring
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))