// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true 
let likesStartups = true
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

if (likesDocumentaries ===true || likesStartups === true){
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
