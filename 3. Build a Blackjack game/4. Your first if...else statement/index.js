// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 19

// if less than 21 -> "You can not enter the club!"
function bouncer(){
    if (age <= 21){
        console.log("ça va pas être possible ce soir ")
    }
    else{
        console.log("Welcome welcome !")
    }
};
bouncer();
// else            -> "Welcome!"

