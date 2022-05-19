let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
let lead = "awesomelead"
inputBtn.addEventListener("click", function() {
    myLeads.push(lead)
    console.log(myLeads)
})