var progress = [false, false, false]

running_process = "none"

//This function handles when an "enter" key is pressed
function keypress_handler(e){
    var input = document.getElementById('user-input');

    //if Enter Key is pressed
    if(e.keyCode == 13){
        var params = String(input.value).split(' ');
        document.getElementById('user-input')

        params.forEach((item, index) => {
            print(item);
            print(' ');
        })

        print('<br>');



        if(Object.keys(programs).includes(params[0])) {
            programs[params[0]](params.slice(1, params.length));
        }
        else {
            print(params[0] + ": command not found (try typing help)<br>")
        }
        setup();

        input_buffer = "";
    }
}

//Output to console
function print(str){
    var input = document.getElementById('user-input');
    var inp_str = input.outerHTML;
    input.outerHTML = "";
    document.getElementById('terminal').innerHTML += str;
    document.getElementById('terminal').innerHTML += inp_str;
}

//This runs to output the terminal prompt and focus on the inputbox
function setup() {
    print("bash@midterm:/ $&MediumSpace;");
    document.getElementById('user-input').focus();
}

//This code runs on window load
document.addEventListener("DOMContentLoaded", function(event) {
    setup();
    parse_cookie();
});

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

//help function - outputs the premise for the challenges
function help(params){
    print(`
    <br>
    HAHAHAHAHA... What are you doing on this page? This website is BROKEN. Done. Finito. You're advertising an alternative to Adobe Software? Are you out of your mind? Everybody knows that all creative professionals have to be slaves to Adobe's subscription business model. <br>
    <br>
    But now it's fine because this site advertises creative software <b>without any color</b>. Who would purchase that?
    <br><br>Did you really think Affinity would get away with making quality, affordable software without ~someone~ coming along attempting to sabotage their efforts to be fair to the consumer. I'm not saying Adobe is the root cause of the lack of color on this page, but I'm also not not saying it. Creative professionals have to be stuck in the subscription loop, paying us... I mean paying Adobe... $50 dollars a month just to have access to the tools required to get designs from their head into reality. Oh yeah and guess what happens if you stop paying? All your work? Good luck opening it 😂😂😂.
    <br><br>
    Regardless, this was an action (we) had to take. We can't let people know there are alternatives to Adobe. If they find this out, Adobe is toast. <br><br>`)
    
    document.getElementsByTagName('body')[0].innerHTML += `<div id="popup"></div>`;

    var popup = document.getElementById('popup')
    popup.className = "popup-animation";
    popup.innerHTML = `
    Help Affinity get their site back! See if you can complete the 3 challenges to fix the broken site. Type "challenges" into the terminal to get more info`;
    popup.addEventListener("animationend", () => {document.getElementById('popup').outerHTML = "";})
}

progress[2] = true;

function complete(i) {
    progress[i] = true;
    console.log(progress[i]);
    var chal_str = "";
    progress.forEach((item, index) => {
        chal_str += item ? "1" : "0";
    })

    document.cookie = "chal=" + chal_str +"; expires=Thu, 3 Jan 2199 00:00:00 UTC; path=/ ";

}

//Get Access to the Challenges
function challenges(params){
    print("<br>Here is your progress on the challenges: <br><br>")
    progress.forEach((item, index) => {
        print("Challenge " + index + ": " + (item ? "Completed" : "Not Completed") + "<br>")
    })
    print("<br>")
    print("To access a challenge, type q[challenge-number] (i.e. q0)<br><br>")
}

//start q2
function q2(params) {
    document.getElementsByTagName('body')[0].innerHTML += `
    <iframe src="assets/iframe/login.html" id="q2-login"></iframe>
    `
    print("Login to this form... I dare you... The answer is easier than you'd think<br><br>")
}

//get rid of question2 popup
async function dispose_q2() {
    document.getElementById('q2-login').outerHTML = "";
    print("<br><br>lol... maybe we should hire a new pentester... <br>")
    setup();
}

function q1(params) {
    
}

function reset(params) {
    document.cookie = "chal=000; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    setTimeoutparse_cookie();
}

//Programs - program names and functions
var programs = {
    "help": help,
    "challenges": challenges,
    "reset": reset,
    "q1": q1,
    "q2": q2
}

