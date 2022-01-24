//Regular Way
//======================================================================================
//1
 function add1(x, y) {
    return x + y;
}
add1(3,4)
//2
const add = function (x, y) {
    return x + y;
}
add(3,5)

//--------------------------------------------------------------------------------------

//ARROW Funtions- A syntactically compact alternative to regular function expressions.
//======================================================================================

/*1.  format
const functionName= (parameters) =>{
    statements;
}
*/
const add2= (x,y) =>{
    return x+y;
}
add2(3,6)

/* Implicit returns-
1. implicitly returns, without writing the return keyword
2. works only for arrow functions
3. only works if there is exactly one expression in the function,
which is to be evaluated and returned.
*/

const rollDie=() => ( //parenthesis used instead of {}
    Math.floor(Math.random()*6)+1 //the return value
)

const add3=(a,b) => a+b //on liner implicit return
//note. the keyword this behaves differently in arrow functions