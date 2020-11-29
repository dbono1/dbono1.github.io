link_css("header")

var header_text = `<button id="nav-hamburger" data-toggle="collapse" data-target="nav">X</button>
<h1><span class="green">Italian-American</span>&nbsp;<span class="red">Virtual Museum</span></h1>`;

document.querySelector('header').innerHTML = header_text;

let nav_out = false;
let hbg = document.querySelector('#nav-hamburger')

hbg.addEventListener('click', () =>
{
    hbg.innerHTML = !nav_out ? `----------<br>----------<br>----------` : `|&emsp;|&emsp;|<br>|&emsp;|&emsp;|<br>|&emsp;|&emsp;|`
    nav_out = !nav_out
})