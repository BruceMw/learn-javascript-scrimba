// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// <img class="team-img" src="images/hip1.jpg">

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const divContainer = document.getElementById("container")

function renderHypster(arr){
    let listImages = ""
    for (i = 0; i< arr.length; i++){
        listImages += `<img alt ="hypster image" class="team-img" src="${arr[i]}">`
    }
    divContainer.innerHTML = listImages
}
renderHypster(imgs)