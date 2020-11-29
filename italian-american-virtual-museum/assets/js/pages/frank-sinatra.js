//set the page tab heading
document.querySelector('title').innerHTML = "Frank Sinatra";

var buidling_div = document.querySelector("#building-holders");

let heights = [45, 30, 60, 25, 35, 30, 27, 20, 26, 40]

for(let i = 0; i < 10; i++) {
    let d = document.createElement("div");
    d.id = "building-" + i;
    d.style.height = heights[i] + "vh";
    if(is_mobile()) {
        d.style.backgroundColor = "black";
    }
    buidling_div.appendChild(d);
}

if(is_mobile()) {
    document.querySelector("#sinatra-img").style.bottom = "0";
    document.body.style.overflowY = "scroll";
}

var audio = new Audio("http://classes.design.ucla.edu/Fall07/153A/projects/nick/15-frank_sinatra-the_best_is_yet_to_come-atm.mp3");

//this function will start the animation
function start_animation() {
    if(is_mobile()) {
        return;
    }

    let offset = document.querySelector('header').clientHeight;
    document.querySelector('#first-screen').style.height = window.clientHeight - offset;
    
    let audio_times = [
        259, 619, 1205, 1352, 1892, 2244, 2726, 2985, 3225, 3551, 3877, 4017, 4410, 4581
    ];

    let end_audio_times = [5000, 5718, 6385, 6833]

    //create a timeline (this is specific to the library)
    var tl = anime.timeline({
        autoplay:false,
        easing: 'easeOutExpo',
        duration: 10000,
        loop: false
      });
    
    for(let i = 0; i < audio_times.length; i++){
        let t = audio_times[i];
        let target = i%2 == 0 ? i/2 : ((i-1)/2) + 2;
        tl.add({
            targets: "#building-" + target,
            keyframes: [
                {opacity: 1},
                {opacity: 0}
            ],
            duration: 500
        }, t);
    }

    for(let i = 6; i < 10;i++)
    {
        let t = end_audio_times[i-6];
        tl.add({
            targets: "#building-" + i,
            keyframes: [
                {opacity: 1},
                {opacity: 0}
            ],
            duration: 500
        }, t);
    }

    tl.add({
        targets: "#building-3",
        keyframes: [
            {opacity: 0},
            {opacity: 1}
        ],
        duration: 100
    }, 7732);

    tl.add({
        targets: "#building-7",
        keyframes: [
            {opacity: 0},
            {opacity: 1}
        ],
        duration: 100
    }, 7932);

    for(let i = 0; i < 10; i++) {
        if(i !== 3 || i !== 7) {
            tl.add({
                targets: "#building-" + i,
                keyframes: [
                    {opacity: 0},
                    {opacity: 1}
                ],
                duration: 100
            }, 7932 + Math.floor((Math.random()*10)*50) + 20);
        }
    }

    tl.add({
        targets: "#sinatra-img",
        keyframes: [
            {bottom: "-100vh"},
            {bottom: "0vh"}
        ],
        duration: 1000
    }, 8000);

    audio.play();
    tl.play();

    setTimeout(()=> {
        document.body.style.overflowY = "scroll"
        document.querySelector('#audio-controls').style.opacity = 1;
        document.querySelector('#audio-controls').style.position = "sticky";
    }, 8000);
}

anime({
    targets: ".sub",
    translateX: [
        {value: -3000, duration: 0, delay: 0},
        {value: 5000, duration: 20000, delay: 1}
    ],
    direction: "normal",
    loop: true,
    easing: "linear"
})
/**/ 
document.querySelector("#play").addEventListener("click", ()=> {
    document.querySelector("#play").remove();
    start_animation();
})

document.querySelector("#play-audio").addEventListener("click", () => {
    if(audio.paused) {
        audio.play();
        document.querySelector("#play-audio").innerHTML = "||";
    }
    else {
        audio.pause();
        document.querySelector("#play-audio").innerHTML = ">";
    }
})

$(document).ready(function(){
    $(window).scrollTop(0);
});
//start_animation();