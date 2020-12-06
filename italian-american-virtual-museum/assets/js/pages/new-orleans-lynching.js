document.querySelector('title').innerHTML = "New Orleans Lynching";

let fade_ins = [
    '#date',
    "#place"
]

window.scrollTo(0,0)

for(let i = 0; i < fade_ins.length; i++) {
    anime({
        targets: fade_ins[i],
        opacity: [
            {value: 0, duration: 0, delay: i*3000},
            {value: 1, duration: 6000}
        ],
        direction: "normal",
        loop: false
    })
}

anime({
    targets: "#continue-btn",
    translateY: [
        {value: 100,  duration: 0, delay: 4000},
        {value:0, duration: 1000}
    ],
    opacity: [
        {value: 0, duration: 0, delay: 4000},
        {value: 1, duration: 1500}
    ],
    direction: "normal",
    loop: false,
    easing: "easeOutBack"
})

let slides = [
    () => {
        anime({
            targets: "#sus",
            opacity: [
                {value: 0, duration: 0, delay: 4000},
                {value: 1, duration: 2000}
            ],
            direction: "normal",
            loop: false
        })
        anime({
            targets: "#eleven",
            opacity: [
                {value: 0, duration: 0, delay: 6000},
                {value: 1, duration: 2000}
            ],
            direction: "normal",
            loop: false
        });
        anime({
            targets: "#to-problem",
            translateY: [
                {value: 100,  duration: 0, delay: 8000},
                {value:0, duration: 1000}
            ],
            opacity: [
                {value: 0, duration: 0, delay: 8000},
                {value: 1, duration: 1500}
            ],
            direction: "normal",
            loop: false,
            easing: "easeOutBack"
        })
    },
    () => {
        anime({
            targets: "#problem",
            opacity: [
                {value: 0, duration: 0, delay: 1000},
                {value: 1, duration: 2500}
            ],
            direction: "normal",
            loop: false
        })
        anime({
            targets: "#innocent",
            opacity: [
                {value: 0, duration: 0, delay: 4000},
                {value: 1, duration: 3000}
            ],
            direction: "normal",
            loop: false
        });
        anime({
            targets: "#to-info",
            translateY: [
                {value: 100,  duration: 0, delay: 6000},
                {value:0, duration: 1000}
            ],
            opacity: [
                {value: 0, duration: 0, delay: 6000},
                {value: 1, duration: 1500}
            ],
            direction: "normal",
            loop: false,
            easing: "easeOutBack"
        })
    }
]

sections = [
    '#intro',
    "#the-problem",
    "#info"
]

slide_position = 0;

function next_slide() {
    document.querySelector('body').style.overflowY= "scroll";
    window.scroll({
        top: document.querySelector(sections[slide_position]).offsetTop,
        behavior: 'smooth'  // 👈 
      });
    slides[slide_position]();
}

document.querySelector("#continue-btn").addEventListener("click", () => {
    next_slide();
})

document.querySelector("#to-problem").addEventListener("click", () => {
    slide_position = 1;
    next_slide();
})


document.querySelector("#to-info").addEventListener("click", () => {
    slide_position = 2;
    next_slide();
    anime({
        targets: "#info-3 div button",
        translateY: [
            {value: 100,  duration: 0, delay: 6000},
            {value:0, duration: 1000}
        ],
        opacity: [
            {value: 0, duration: 0, delay: 6000},
            {value: 1, duration: 1500}
        ],
        direction: "normal",
        loop: false,
        easing: "easeOutBack"
    })
})

for (let i=3; i<8; i++ ) {
    document.querySelector("#info-" + String(i) + " div button").addEventListener("click", () => {
        window.scroll({
            top: document.querySelector("#info-" + String(i+1)).offsetTop,
            behavior: 'smooth'  // 👈 
          });
        anime({
                targets: "#info-" + String(i+1) + " div button",
                translateY: [
                    {value: 100,  duration: 0, delay: 6000},
                    {value:0, duration: 1000}
                ],
                opacity: [
                    {value: 0, duration: 0, delay: 6000},
                    {value: 1, duration: 1500}
                ],
                direction: "normal",
                loop: false,
                easing: "easeOutBack"
        })
    })
}


document.querySelector("#to-top").addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'  // 👈 
      });
    slide_position = 0;
})