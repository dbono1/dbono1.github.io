//this js file will audo add the header
//to the first <header> tag on your HTML page

//link the css for the header
link_css("header")

//this is the html code for the header
var header_text = `<button id="nav-hamburger" data-toggle="collapse" data-target="nav">X</button>
<h1><span class="green">Italian-American</span>&nbsp;<span class="red">Virtual Museum</span></h1>`;

//add it to the document
document.querySelector('header').innerHTML = header_text;

//this is just a toggle for the nav menu being opened or not
let nav_out = false;
let hbg = document.querySelector('#nav-hamburger')

//this changes the content of the hamburger menu button, based on
//whether the navbar is opened or not
hbg.addEventListener('click', () =>
{
    hbg.innerHTML = !nav_out ? `----------<br>----------<br>----------` : `|&emsp;|&emsp;|<br>|&emsp;|&emsp;|<br>|&emsp;|&emsp;|`
    nav_out = !nav_out
})