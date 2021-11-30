// Numbers:
1;
-99;
0.345345;
0/0; //NaN, but typeof NaN= 'number'

//Making variables with let: new way
let anumber = 1;

//Making variables with var: works but not preferred
var anothernumber=true;
var anothernumber=9;
//a variable can store values diffent from the ones assigned at birth

//Incrementing:
anumber += 3; //numberOfFriends is now 4
anumber=anumber+3; //alternate
anumber++; //increments by 1

//Decrementing:
anothernumber -= 3; //anothernumber is now 6
anothernumber=anothernumber-3; //alternate
anothernumber--; //prints current value once before decrement

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN after initial assignment

//Booleans - true or false values
true;
false;
let isHappy = true;

//*Naming Conventions*
// NOT THE JS WAY:
//special symbols not allowed
//no.s can't be 1st character
// _ can't be 1st character

//+Naming Advice+
//avoid one char variable
//lowercase the 1st letter
//uppercase the 1st letter of every next variable word
// Use upper camel-cased names:
let numberofchicken=6; //GOOD
let number_of_chicken=6;


//printing something
console.log("something");
console.log("HELLO FROM OUR FIRST JS FILE!!!!");
let total = 1 + 3;
console.log(total,"GOODBYE!",4+5);

//that annoying top pop-up, don't do this in any production app
alert("hi there!");

//also pops-up from above but takes an argument too
prompt("enter a no.");
let userInput= prompt("enter a no."); //now the input goes to a variable

//**to link the js file to the html file, add in <head> tag
//or the end of the <body> (preferred)
// <script src="location/name.js"> </script>

//enter a number
let a=parseInt(prompt("enter a number")); //converts input string to number