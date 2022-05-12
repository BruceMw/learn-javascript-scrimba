let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:
function cardCheck(){
    // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
    if (sum <=20){
        console.log("Draw a new card ?")
    }
    // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
    else if (sum = 21){
        console.log("woooh Blackjack baby!")
    }
    // else -> "You're out of the game! 😭"
    else{
        console.log("you are out of the game")
    }
};
cardCheck();