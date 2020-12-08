var work = [
    {"title":"Comics", "slug":"week02", "link":"/hw2/hw2.html", "date":"2020-09-10"},
    {"title":"Week 04", "slug":"week04", "link":"/hw4/hw4.html", "date":"2020-09-20"},
    {"title":"Slideshow", "slug":"week04", "link":"/slideshow/project.html", "date":"2020-09-20"},
    {"title":"The Crito", "slug":"week05", "link":"/hw5-netart/hw5-start.html", "date":"2020-10-10"},
    {"title":"Midterm Prop", "slug":"midterm", "link":"/midterm/proposal/proposal.html", "date":"2020-10-15"},
    {"title":"Midterm", "slug":"midterm", "link":"/midterm/site/home", "date":"2020-10-20"},
    {"title":"TheButton", "slug":"donotpress", "link":"/button", "date":"2020-10-20"},
    {"title":"Flappy", "slug":"flappy", "link":"/flappy", "date":"2020-10-20"},
    {"title":"Final Project", "slug":"italian-american-virtual-museum", "link":"/italian-american-virtual-museum", "date":"2020-10-20"}
]

let F = document.createElement('a')
console.log(F)

//function setRecentWork() {
    var HTMLwork = document.getElementById('class-work');
    //This is a template dom object:
    for(let i = 0; i < work.length; i++) {
        //var dom = "<a id='%slug' href='%link'>%title</a>";
        let json_element = work[i];
        
        
        let a =document.createElement('a');

        a.id = json_element["slug"];
        a.href = json_element["link"];
        a.innerHTML = json_element["title"];
        let slug = json_element["slug"];
        console.log("linear-gradient(rgba(0,0,0,0), #000), url(/assets/img/" + slug + ".jpg);")
        a.style.background = "linear-gradient(rgba(0,0,0,0), #000), url(/assets/img/" + slug + ".jpg)";
        a.style.backgroundSize = "cover";
        a.style.backgroundPosition = "center";
        console.log(a)
        HTMLwork.appendChild(a);
        /*
        Object.keys(json_element).forEach(function(k){
            console.log(k + ' - ' + json_element[k]);
            dom = dom.replace('%' + k, json_element[k]);
        });
        HTMLwork.appendChild(createEleme)

        
        
        document.querySelector("#"+ String(slug)).style.background = "linear-gradient(rgba(0,0,0,0), #000), url(/assets/img/" + slug + ".jpg);";
        */
    }
//}

//setRecentWork();

