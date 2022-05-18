let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function randomizer(){
    let number = Math.floor(Math.random() * 3)
    return hands[number]
}
console.log(randomizer())
