let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
function add3Points(){
    myPoints+=3;
};
function remove1point(){
    myPoints-=1;
}
// add/remove points to/from the myPoints variable
add3Points();
add3Points();
add3Points();
remove1point();
remove1point();


// Call the functions to that the line below logs out 10
console.log(myPoints)