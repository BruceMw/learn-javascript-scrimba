let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("result-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    console.log ("add clicked")
    result.textContent = "Result: " + (num1 + num2)
};
add()
function substract(){
    console.log("subsract clicked")
    result.textContent = "Result: " + (num1 - num2)
};
substract()
function divide(){
    console.log("divide clicked")
    result.textContent = "Result: " + num1 / num2
};
divide()
function multiply(){
    console.log("multiply clicked")
    result.textContent = "Result: " + num1 * num2
}
multiply();
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


