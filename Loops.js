/*------------------------
      For loop
--------------------------*/

/* Standard
for([condition's variable];[condition];[updating the variable]){}
--as long as the condition returns true, the loop runs
*/

//WAP to print nos 1-10
for(let i=1; i<=10;i++){
    //statements
    console.log(i);
}

//using loops to iterate over arrays

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for(let i=0;i<people.length;i++){
    console.log(people[i].toUpperCase())
}

/*------------------------
      while loop
--------------------------*/
let num=0; //condition's variable must be declared before loop
while(num<10){ //runs as long as the condition returns true
    console.log(num);
    num++; //condition's variable must be updated within the loop
}

/*------------------------
    for of loop
--------------------------*/
//a nice and easy way to iterate arrays and other iterable stuff
//string
for (let char of "hello world"){
    console.log(char)
}
//array
for (let x of people){
    console.log(x)
}
//objects**
const testScores={
    keenan:80,
    damon:67,
    stefan:70
}
for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`)
}

/*Loops can also be nested within each other,
if need be. */