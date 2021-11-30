//below code helps identify the default bool for types
const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// } -->falsy

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }  -->falsy

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }  -->falsy

// if ('') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }  -->falsy