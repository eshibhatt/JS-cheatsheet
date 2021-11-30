//Methods- adding functions as properties on objects.
cost myMath={
    PI: 3.14159,
    multiply: function(x,y){
        return x*y;
    },
    divide: function(x,y){
        return x/y;
    },
    square: function(x){
        return x**2;
    }
}
console.log(myMath.multiply(5,6))
console.log(myMath.square(8))


//this keyword
const hen={
    name:"Helen",
    eggCount:0,
    layAnEgg(){
        this.eggCount+=1; //this keyword, helps the objects own elements from within
        return "EGG";
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;