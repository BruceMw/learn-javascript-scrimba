
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
function buy(){
    container.innerHTML += "<p> Thank you for buying! </p>"
}
// that says "Thank you for buying!"