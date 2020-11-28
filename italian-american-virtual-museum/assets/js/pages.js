const urlParams = new URLSearchParams(window.location.search)
const page_key = urlParams.get('page');

link_css('page');

//This function will take the URL parameter Key and underline 
//the menu option in the nav bar
function underline_page_button() {
    if(typeof(nav_loaded) === "undefined"){
        setTimeout(underline_page_button, 50);
    }
    else {
        underline_button(page_key)
    }
}

//This initializes one of the app pages...
//It essentially works by loading a hidden iframe, and then 
//taking the contents of the iframe, reading them, then 
//displaying them on the screen
function init() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', root + 'assets/html/' + page_key + ".html");
    
    //This is the event listener for "load" for the iframe
    //object that hasn't been loaded to the screen yet
    //After the iframe is loaded, we can then load the css, js, and render
    //the html onto the screen
    iframe.addEventListener('load', () => {
        let ifr = document.querySelector('iframe');
        document.querySelector('main').innerHTML = ifr.contentDocument.querySelector('body').innerHTML;
        link_css("pages/" + page_key);
        link_js("pages/" + page_key);
    })
    
    //render the iframe onto the screen to load the sub page
    document.querySelector('#iframe-loader').appendChild(iframe);

    //underline the page button in the navbar
    underline_page_button();
}

init();