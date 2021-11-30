// Making Strings
// Declare withing Single/double quotes:
let firstName = "purple";
let lastName = 'avida';
let quoteUse= 'You had me at "hello"';

//Strings have a length:
lastName.length; //5

//We can access specific characters using their index:
lastName[0]; //'T'
lastName[3]; //'y'
// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg" >>trims extra spaces in either ends
'    omg  '.trim().toUpperCase(); //also uppercases this time
'heyy'.length; //returns string length

//concatenation:
firstName +" "+ lastName; // purple avida

//
"omg"*3; //omgomgomg;

// String methods with arguments:
// ==============================

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
"pancake".slice(3); //"cake" - returns from index 3 to all the way till it ends
"pancake".slice(0, 3); //"pan" - returns from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - 1st argument is the one we want to replace,
//                          2nd is the one we want to replace it with

"hehe".repeat(2); //repeats 2 times

// String Template Literals
// ========================

// Use backtick characters, NOT SINGLE QUOTES!
//  located above tab key, content of backticks are evaluated
// and turned into a string
const color = "olive green";
const msg = `My favorite color is: ${color}`;
// >>"My favorite color is: olive green"
const str = `There are ${60 * 60 * 24} seconds in a day`
// >>"There are 86400 seconds in a day"

// Null= intentionally setting no value, can be assigned later
let loggedInUser= null;
//Undefined= variables that do not have any value assigned.
let username;

//Math object: contains properties for mathematical constants and functions
let pi= Math.PI; //gives a std value of pi
Math.round(4.8); //5, rounds off
Math.abs(-456); //456, returns absolute value
Math.floor(3.9999); //3, removes decimal
Math.random(); //returns a random decimal no
const die1 = Math.floor(Math.random() * 6) + 1;
//randomly generates within 1-6
//there are many others, a list appears on typing Math.
