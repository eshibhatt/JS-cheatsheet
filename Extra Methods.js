// Set Timeout = used to stop execution for a given time.
// -------------

console.log("Hello!!...")

setTimeout( () => {
    console.log("...are you still there>")
}, 3000) //runs this function, after 3 seconds


// Set Interval = used to repeats execution over and over,
//                after the given interval.
setInterval( () => {
    console.log("...are you still there>")
}, 3000) //this will go on as long as the window is opened, if not stopped


/*TO stop it- save the setInterval() to a const,
and pass it to clearInterval(const) */

//=========================================================


//Filter= returns a new array, with all elements that pass the test
//        implemented by the enclosing function.

const nums= [3,6,9,12,15,18,21,24,27];
const odds= nums.filter( n=>{
    return n%2===1; //if this returns true, n passess the function
})
//is added to the filtered array of all odd numbers in nums

//=========================================================

//Some: returns true if any of the elements, passes the condition
nums.some( n==>{
    return n%2==0;
})// true; as some elements are even

//Every:returns true if all of the elements, passes the condition
nums.some( n==>{
    return n%3==0;
})// true; as all elements are divisible by 3


//=========================================================

//Reduce: Executes a said function, on each element to the array, resulting in a single value

//eg: Summing an array
nums.reduce( (holder,currentVal) => {
    return holder + currentVal; //whatever is returned, is passed into the holder for next iteration of the function
});