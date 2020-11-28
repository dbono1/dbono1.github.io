const root = "/italian-american-virtual-museum/"

//functions to dynamically link css and js
function link_js(name) {
    link_js_full_path(root + "assets/js/" + name + ".js")
}

function link_css(name) {
    link_css_full_path(root + "assets/css/" + name + ".css");
}

function link_js_full_path(path) {
    let script = document.createElement('script');
    script.src = path;
    document.head.appendChild(script);
}

function link_css_full_path(path) {
    let css_link = document.createElement('link');
    css_link.rel = 'stylesheet';
    css_link.type = 'text/css';
    css_link.href = path;
    document.querySelector('head').appendChild(css_link);
}

link_css("app");

//link the nav and header js "app"
link_js('nav');
link_js('header');