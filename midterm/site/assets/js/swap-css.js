var progress=[false, false, false]

//convert the cookies to memory
function parse_cookie() {
    var cookies=document.cookie.split('; ')
    var chal_exist = false;
    cookies.forEach((item, index) => {
        var pair = item.split('=');
        if(pair[0] == "chal") {
            chal_exist = true;
            progress.forEach((item, index) => {
                progress[index] = String(pair[1]).charAt(index) == '1';
            })
        }
    })
    if(!chal_exist) {
        document.cookie = "chal=000; expires=Thu, 3 Jan 2199 00:00:00 UTC; path=/ "
    }
}

parse_cookie();
var link = document.createElement('link');
link.rel="stylesheet";
link.type="text/css";
link.href= "assets/css/styles.css";
if(progress[0] && progress[1] && progress[2]) {
    link.href = "assets/css/styles-color.css";
}
document.getElementsByTagName('head')[0].appendChild(link);

