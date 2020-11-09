// Good for Debugging
console.log("the Message!!");

// Created a JS variable called button
// theButton is an variable that references theButton tag from html
let theButton = document.querySelector("button");

// Adding the click funtion to click
theButton.addEventListener('click', theClick);

// The function that happens when you click
function theClick() {
    console.log("cick!!!");
    theButton.classList.add("falling-animation");

    setTimeout(() => {
        document.querySelector("#theButton").classList.remove("falling-animation")
    }, 5000)
}
