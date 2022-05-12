// Check if the person is elegible for a birthday card from the King! (100)

let age = 101

// if less than 100    -> "Not elegible"
function kingCard(){
    if (age <100){
        console.log("You are a fucking toodler");
    }
    // else if exactly 100 -> "Here is your birthday card from the King!"
    else if (age===100){
        console.log("A message from the king ! Here is your birthday card from the King");
    }
    // else                -> "Not elegible, you have already gotten one"
    else{
        console.log("you have already gotten one old man");
    }
};
kingCard()