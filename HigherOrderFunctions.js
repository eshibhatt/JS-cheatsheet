/*
Higher order functions
-------------------------------------------------
i) they can take functions as an argument
ii) or return a function as answer.
-------------------------------------------------
*/

// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {//remember to remove()
    func();
    func();
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}
callTwice(rollDie)



// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random(); //depending on this random no, we are returning on of the below functions
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}



