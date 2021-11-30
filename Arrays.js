// Declaring an array:
const colors = ["red", "orange", "yellow","indigo","violet"]; //array of characters
let nums=[19,22,45,67]; //array of numbers
let stuff= [true,68,NaN,'cat',null]; //mixed array
const board=[ //nested arrays
    ["O",null,"X"],
    [null,"X","O"],
    ["X","O",null]
]

// Arrays are indexed like strings: and can be accesed by indices
//accessing an array by index
colors[0];    // "red"
board[1][1];  //"X"

//accessing an array by looping over its indices
for (let i=0;i<colors.length;i++){
    console.log(i,colors[i]);
}


//However String chars cannot be modified by index
//modifying array element by index
colors[2]="pink"; //if u assign to an index bigger than its length
//the array will create empty spaces till it fills the target index with the assigned

// to know their length:
colors.length; //returns 3

// Important array methods:
//===========================
//push(value) - adds value to the END of an array
colors.push('green','blue');
//pop() - removes and returns last value in array
colors.pop();
//unshift(val) - adds value to START of an array
colors.unshift("purple");
//shift() - removes and returns first element in an array
colors.shift();

//some other commonly used array methods:
//=======================================
let wizards=["harry","draco","hermione"];
let vampires=["stefan","damon","katherine"];
let supernaturals=vampires.concat(wizards); //concat combines arrays without modifying any of THE ORIGINALS

vampires.includes("damon"); //returns a boolean TRUE

vampires.indexOf("damon"); //returns where damon is

vampires.reverse(); //will reverse the original array

//returns a copy, of a portion of an array
colors.slice(); //returns a copy of the whole array
colors.slice(3);//returns from 0-3 index elements
colors.slice(2,4);//returns from index 2-4
colors.slice(-2); //returns the lat 2 elements

//SPLICE- modifies the orginal array
//colors.splice(<index>,<no of elements>); deletes the no of elements from that index
//colors.splice(<index>,0,<value to add>); 0 deletes nothing, and adds the value in the index right after the said index

nums.sort();//sorts ascending to desc

//EXCEPTIONS due to REFERENCES in ARRAYS
/*
1. == and ===, does not work right on array,
as js doesn't compare the values inside but,
rather the reference address of the variables
2. similary, const arr; lets the contents between the [] change
but the variable itself cannot be reassigned,
even to another array containing same elements in the same order
as even tho they look the same, and represen the same thing for us,
they are but different in memory and hence reference address*/
