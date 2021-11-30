/* key value pairs
no need of index to access data*/

//creating an object
const person={
    firstName:"Erem",
    lastName:"Yeager",
    favNum: 8,
    favColors:["blue","green"]
}

//accesing objects by their KeyName
person["firstName"]; //dont forget the quotes, js converts the keynames to strings
person.firstName;//now forget it

//creating a variable pointing to a string using the data of person
let tatakae=person["firstName"]+person["lastName"];

//modifying objects
person.favNum=9; //u can also insert something of a different datatype
person["firstName"]="Zeke";
person["Father"]="Grisha"; //adding key value pairs

//nesting arrays and objects

//array containing objects
const shoppingCart=[
    {
        product:"ODM Gear",
        price:50
    },
    {
        product:"Serum",
        price:20
    }
]

//object containing arrays
const student={
    firstName:"Armin",
    lastName:"Arlert",
    strengths:["Leadership","Compassion"]
    exams:{
        midterm:91,
        endterm:95
    }

}