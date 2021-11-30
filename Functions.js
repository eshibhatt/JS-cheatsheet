//declaration
function singSong(){
    console.log("la")
    console.log("la")
    console.log("la")
}
//calling the function
singSong()

//using arguments to input to a function
function sum(a,b){
    console.log(a+b)
}
sum(5,5)//pass arguments in accordance to the order of the function parameters

function greet(firstname){
    console.log(`Hello ${firstname}`)
}
greet("Annie")

function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant("I hate beets")

//function scope- variables declared within a function, exist within it
let totalEggs=0; //variable with global scope 
function collectEggs(){
    totalEggs=6;
    let chickens=7; //variable with local scope 
}
console.log(totalEggs); //accessible
console.log(chickens);  //says undefined
//Block Scope- Functions declared within a code block,(eg loop) exists only within that block
//Lexical Scope- A nested or inner function, has access to the same stuff as its parent function.

//Storing a Function in a variable
const add= function(x,y){//notice the function has no name
    return x+y;
}//JS sees functions as just another object, they can thus be stored,named and passed around.
add(3,5); //accessing the above function, by its variable name