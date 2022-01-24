const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,12]

/*arr.forEach(function)- not common
it is passing in every element to the enclosed function*/
numbers.forEach(print); //to print every element

numbers.forEach(function (el)){ //more common
    if(el%2==0){
    console.log(el);
    }
}

//arr.map(function (t)){} -returns a new array which can be stored

//on array
const doubles= numbers.map(function (num)){
    return num*2;
}

//on object

const movies={
    {
        title:'Amadeus',
        score:99
    },
    {
        title:'Stand by me',
        score:86
    },
    {
        title:'Parasite',
        score:95
    },
    {
        title:'Alien'
        score:90
    }
}

//making an array of titles
const title=movies.map(function(movie){
    return movie.title.toUpperCase();
}

// map function: generates a new array with unique elements of the array passed

const numbers= [1,2,3,4,5]
numbers.map(function(num)){
    return num*2
}
//whatever the return value from the above func is, map will take that and create a new array
//it does not change the original array in any way
//to save the returned array, put it in a variable