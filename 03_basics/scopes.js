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
function addone(num){
    return num + 1
}
console.log(addone(5))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))