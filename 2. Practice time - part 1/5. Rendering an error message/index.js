let errorMessage = document.getElementById("error");
console.log(errorMessage);
// When the user clicks the purchase button, render out
function purchase(){
    errorMessage.textContent = "Something went wrong, please try again";
}
purchase();
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

