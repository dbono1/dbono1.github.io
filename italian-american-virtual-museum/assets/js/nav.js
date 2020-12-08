let nav_contents = {
    "Home": [],
    "Historical Events": [
        /*"Mass Migration 1890-1920",*/
        "New Orleans Lynching"
        /*"World War II"*/
    ],
    "People": [
        "Frank Sinatra"
    ]
}

let info_content = {
    //"mass-migration-1890-1920": ["ellis-island.png", "From 1880 to 1915, 13 million Italians migrated out of Italy, making Italy the scene of the largest voluntary emigration in recorded world history.<a href='https://en.wikipedia.org/wiki/Italian_Americans#The_period_of_mass_immigration_(1890%E2%80%931920)'>wiki</a>"],
    "new-orleans-lynching": ["lynching.jpg", "The March 14, 1891, New Orleans lynchings were the murders of 11 Italian Americans in New Orleans, Louisiana, by a mob for their alleged role in the murder of city police chief David Hennessy after some of them had been acquitted at trial. It was one of the largest single mass lynchings in American history. <a href='https://en.wikipedia.org/wiki/March_14,_1891_New_Orleans_lynchings'>wiki</a>"],
    //"world-war-ii": ["wwii.jpg", "As a member of the Axis powers, Italy declared war on the United States in December 1941 after Japan attacked Pearl Harbor. Over 1.5 million Italian-Americans served in the armed forces during World War II, amounting to some 10% of American soldiers in total. <a href='https://en.wikipedia.org/wiki/Italian_Americans#World_War_II'>wiki</a>"],
    "frank-sinatra": ["sinatra.jpg", "Francis Albert Sinatra (/sɪˈnɑːtrə/; December 12, 1915 – May 14, 1998) was an American singer, actor and producer who was one of the most popular and influential musical artists of the 20th century. He is one of the best-selling music artists of all time, having sold more than 150 million records worldwide. <a href='https://en.wikipedia.org/wiki/Frank_Sinatra'>wiki</a>"]
}

//The below code renders the navbar from the 
//JSON objects above
let nav = document.querySelector("nav");
let qinfo = document.querySelector("#quick-info");
let q_hover = false;

//setup some DOM stuff
qinfo.innerHTML = `<img id="quick-info-img">
<p id="quick-info-text"></p>`;

//link the css for the navbar
link_css("nav");

//event for mouse enter the info page
qinfo.addEventListener("mouseenter", () => {
    q_hover = true;
})

//event for mouse leave the info page
qinfo.addEventListener("mouseleave", () => {
    q_hover = false;
    close_info();
})

//open the side info tab
function open_info(child_key) {
    var info = document.querySelector("#quick-info");
    info.classList.remove("close-info");
    info.classList.add("open-info");
    
    document.querySelector("#quick-info img#quick-info-img").setAttribute("src", root + "assets/img/" + info_content[child_key][0]);
    document.querySelector("#quick-info p#quick-info-text").innerHTML = info_content[child_key][1];
}

//close the info side panel
function close_info() {
    //but only if the mouse didn't leave the hover thing and also enter the info panel,
    //then we wait for the user to leave the info panel to close it
    if( !q_hover){
        var info = document.querySelector("#quick-info");
        info.classList.remove("open-info");
        info.classList.add("close-info");
    }
}

//load the navbr
function load_nav() {
    //create a whole bunch of dom elements
    //and add event listeners and stuff for the buttons
    //in the navbar
    //the navbar is built with bootstrap (hence the "data-toggle" options)
    for(var key in nav_contents) {
        let nav_content = nav_contents[key];
        let nav_item = document.createElement("button");
        nav_item.innerHTML = key;
        nav_item.id = key.toLowerCase().replaceAll(' ', '-');
        nav_item.setAttribute('data-toggle', 'collapse');
        nav_item.setAttribute('data-target', "#" + key.toLowerCase().replaceAll(' ', '-') + "-sub");

        nav.appendChild(nav_item);
        if(nav_content.length != 0) {
            let child_div = document.createElement("div");
            child_div.id = key.toLowerCase().replaceAll(' ', '-') + "-sub";
            child_div.className += "collapse";

            for(var sub in nav_content)
            {
                let child = document.createElement("button");
                let child_key = nav_content[sub].toLowerCase().replaceAll(' ', '-');
                child.id = "btn-" + child_key;
                child.innerHTML = nav_content[sub];
                child_div.append(child);

                child.addEventListener("mouseenter", () => {
                    q_hover = true;
                    open_info(child_key)
                });

                child.addEventListener("mouseout", () => {
                    q_hover = false;
                    setTimeout(close_info, 100);
                })

                child.addEventListener("click", () => {
                    window.location.href= "pages.html?page="+child_key;
                })
            }
            nav.appendChild(child_div)
        }
    }

    //add a link for the home option to go home
    document.querySelector("#home").addEventListener("click", () => {
        window.location.href="/italian-american-virtual-museum/";
    })

    //this will return true when the whole nav bar is loaded (kind of)
    return true;
}

//this function will underline any button on the
//nav bar

//this is used when an info page gets dynamically loaded
function underline_button(button_key) {
    document.querySelector('#btn-' + button_key).style.textDecoration='underline';
}

//set the global variable "nav_loaded" to true,
//when the nav bar actually gets loaded
nav_loaded = load_nav();