/*SPREAD IN FUNCTIONS
allows each element of an iterable to be passed as
a separate argument in functions.
eg. console.log(...'hey')===console.log('h','e','y')
*/ 
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
Math.max(nums) //NaN
Math.max(...nums) //53456


// SPREAD IN ARRAYS
//copies everything from the two arrays and combines them in one
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


/* SPREAD IN OBJECTS
-copies properties from one object into another object literal
-if any common property is there, the last object gets precedence */
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }