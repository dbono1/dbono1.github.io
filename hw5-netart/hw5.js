
function modifyScreenContainerSize(){
    var screen = document.getElementById('screen');
    var ratio = 9/16;
    
    var height = window.innerHeight;
    var width  = window.innerWidth;

    if((width/ratio) > window.innerHeight) width = window.innerHeight * ratio;
    
    if((height * ratio) > window.innerWidth) height = window.innerWidth / ratio;

    screen.style.height = height + "px";
    screen.style.width = width + "px";

    document.getElementById('notification').style.width = (width-20) + "px";
    document.getElementById('notification').style.left = (window.innerWidth - width)/2 + 10 + "px"
}

function updateClock(){
    var today = new Date();
    var id = document.getElementById('clock');
    id.innerHTML = today.getHours() + ":" + (today.getMinutes() < 10 ? "0": "") + today.getMinutes();
    setTimeout(updateClock, "1000ms");
}

var messages = [];
var reject_notif = false;

//sleep function, stolen from: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        var i = 0;
        var id=setInterval(frame, 1);
        function frame() {
            i++;
            if(i > milliseconds){
                clearInterval(id);
                resolve();
            }

            if(reject_notif){ 
                reject_notif = false;
                reject();
            }
        }
    })
}


function notif_enter() {
    return new Promise((resolve, reject) => {
        var notification = document.getElementById('notification');
        var top = parseInt(notification.style.top);

        var id=setInterval(frame, 1);
        function frame() {
            if(top < 10){
                var x = (top - 11)*-1
                //animation function created with desmos: https://www.desmos.com/calculator/rpnleg6rt2
                top = top+Math.ceil((-1/2400)*(x-80)*(x-80) + 3);
                notification.style.top = top + "px";
            }
            else {
                clearInterval(id);
                resolve();
            }

            if(reject_notif){ 
                reject_notif = false;
                reject();
            }
        }
    })
}

function notif_exit() {
    return new Promise((resolve, reject) => {
        var notification = document.getElementById('notification');
        var top = parseInt(notification.style.top);
        
        var id=setInterval(frame, 1);
        function frame() {
            if(top > -150){
                var x = (top - 11)*-1
                //animation function created with desmos: https://www.desmos.com/calculator/rpnleg6rt2
                top = top - ( Math.ceil((-1/2400)*(x-80)*(x-80) + 3));
                notification.style.top = top + "px";
            } else {
                clearInterval(id);
                resolve();
            }

            if(reject_notif){ 
                reject_notif = false;
                reject();
            }
        }
    })
}

function notify(obj){
    //shorten the notification content
    var content_arr = String(obj['content']).split(' ');
    var content = "";

    for(var i = 0; i < messages.length; i++)
    {
        if(messages[i]["name"] == obj["name"])
        {
            messages.splice(i,i)
            break;
        }
    }

    messages.push(obj);

    for(var i = 0; i < content_arr.length; i++)
    {
        if((content + content_arr[i]).length < 140)
        {
            content += " " + content_arr[i];
        }
        else {
            content += "...";
            break;
        }
    }

    document.getElementById('notification-subject').innerHTML = obj['name'];
    document.getElementById('notification-content').innerHTML = content;

    document.getElementById('notification').onclick = (() => {
        reject_notif = true;
        notif_exit();
        document.getElementById("screen-content").src = "screens/message_window.html#" + obj['name'];
    })

    notif_enter().then(sleep(1000).then(notif_exit));
}
document.addEventListener("DOMContentLoaded", function(event) {
    modifyScreenContainerSize();
    updateClock();
    document.getElementById('notification').style.top = "-150px";
});

window.addEventListener('resize', modifyScreenContainerSize);


