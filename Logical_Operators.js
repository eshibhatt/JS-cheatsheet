// =====================
// LOGICAL AND OPERATOR =true is all operands are true
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!");
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!");
}

// =====================
// LOGICAL OR OPERATOR = true is Any one is true 
// =====================
let vari=8;
if (vari===8 || vari===9){
    console.log("Auspicious Numbers");
}else{
    console.log("meh");
}

// =====================
// LOGICAL NOT OPERATOR = if something is true it returns false, and vice-versa
// =====================
let firstName = prompt("enter your first name");
if (!firstName) { //if nothing is enter then firstname is an empty string i.e. false
    firstName = prompt("TRY AGAIN!!!");
}



// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!");
}



// =====================
// AGEWISE PRICE EXAMPLE
// =====================

//constraints
// 0-5 BABY =free 
// 5-10 CHILD =$10 
// 10-65 ADULT =$20
// 65+ SENIOR CITIZEN =free

const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}