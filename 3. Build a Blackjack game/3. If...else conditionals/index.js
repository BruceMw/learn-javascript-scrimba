let firstCard = 7
let secondCard = 10
let sum = firstCard + secondCard

function gainsBlackjack(){
    if (sum < 21){
        console.log("draw ?");
    }
    else if (sum===21){
        console.log("Blackjack !!")
    }
    else {
        console.log("You lose")
    }
}
gainsBlackjack();