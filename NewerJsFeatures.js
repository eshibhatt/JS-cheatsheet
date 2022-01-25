// ==================
// Default Parameters
// ==================
function rollDie(numSides = 6) { //if value is not passed, it will resort to default value
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}


// ==================
// Rest Parameters
// ==================
function sum(...nums) { //all values passed, would be stored in nums array
    return nums.reduce((total, el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

/* Note- Arguments in Js, act like an array, in case of access
but are not really an array. So they don't support array methods. 

The rest parameter (...arr) stores all the passed values as an array
which can later support array methods. */
