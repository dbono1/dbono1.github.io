

var message_index = 0;
var users_turn = true;
var dialogue = parent.dialogue;

function same_as_previous(i){
    return i==0? false : dialogue[i]['name'] == dialogue[i-1]['name'];
}



function next_message(){
    var i = message_index;

    if(same_as_previous(i)){
    l_or_r = dialogue[i]['name']=="SOCRATES"? "left": "right";
        var same_as_last = document.getElementsByClassName(l_or_r);
        same_as_last[same_as_last.length-1].innerHTML+= '<div class="' + (l_or_r == "left"? "gray" : "blue") +' message">' + dialogue[i]['content'] + '</div>'
    } else {
        l_or_r = dialogue[i]['name']=="SOCRATES"? "left": "right";
        document.getElementsByTagName('main')[0].innerHTML += '<div class="' + l_or_r +'"><div class="' + (l_or_r == "left"? "gray" : "blue") +' message">' + dialogue[i]['content'] + '</div></div>';
    }
    message_index++;

    var msgs = document.getElementsByTagName('main')[0].children;
    msgs[msgs.length-1].scrollIntoView();

    if(dialogue.length != i+1)
    {
        //if the next message is for the user
        if(dialogue[i+1]['name']=="CRITO"){
            document.getElementById('send-button').style.visibility = "visible";
            document.getElementById('send-button').style.display = "inline-block";
            document.getElementById('send-button-disable').style.visibility = "hidden";
            document.getElementById('send-button-disable').style.display = "none";
        }
        else{
            document.getElementById('send-button').style.visibility = "hidden";
            document.getElementById('send-button').style.display = "none";
            document.getElementById('send-button-disable').style.visibility = "visible";
            document.getElementById('send-button-disable').style.display = "inline-block";
            var next_message_time = Math.floor((Math.floor(Math.random()*3000)+1000)*(dialogue[i]['content'].split(' ').length/10));
            console.log(next_message_time)
            setTimeout(next_message, next_message_time);
        }
    }
}

next_message();
