

var message_index = 0;

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

}

next_message();
