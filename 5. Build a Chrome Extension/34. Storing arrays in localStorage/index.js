let myLeads = `["www.awesomelead.com"]`
//turn myLeads string into an array
myLeads = JSON.parse(myLeads)
//push a new value into the array
myLeads.push("epic")
// turn the array into a string again
myLeads = JSON.stringify(myLeads)
// console log the string using typeof to verify that it's a tring
console.log(typeof (myLeads))

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
