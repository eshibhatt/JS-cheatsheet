//  Try/Catch - makes sure the code continues, even if it catches an error

try{
    hello.toUpperCase();
}catch{
    console.log("ERROR!!!")
}

console.log("AFTER!"); //won't usually work if there's error before

//eg-2

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(2))
        //this only works with a string input
    }catch(e){//for exception handling
        console.log(e);
        console.log("Please pass a string:")

    }
}