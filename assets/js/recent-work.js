var work = [
    {"title":"Comics", "slug":"week02", "link":"/hw2/hw2.html", "date":"2020-09-10"},
    {"title":"Week 04", "slug":"week04", "link":"/hw4/hw4.html", "date":"2020-09-20"},
    {"title":"Slideshow", "slug":"week04", "link":"/slideshow/project.html", "date":"2020-09-20"},
    {"title":"The Crito", "slug":"week05", "link":"/hw5-netart/hw5-start.html", "date":"2020-10-10"},
    {"title":"Midterm Prop", "slug":"midterm", "link":"/midterm/proposal/proposal.html", "date":"2020-10-15"},
    {"title":"Midterm", "slug":"midterm", "link":"/midterm/site/home", "date":"2020-10-20"},
    {"title":"TheButton", "slug":"donotpress", "link":"/button", "date":"2020-10-20"}
]

function setRecentWork() {
    var HTMLwork = document.getElementById('class-work');
    //This is a template dom object:
    
    for(i = 0; i < work.length; i++) {
    
        var dom = "<a id='%slug' href='%link'>%title</a>";
        var json_element = work[i];
        console.log(json_element);
        Object.keys(json_element).forEach(function(k){
            console.log(k + ' - ' + json_element[k]);
            dom = dom.replace('%' + k, json_element[k]);
        });
        HTMLwork.innerHTML += "\n" + dom;

        let slug = json_element["slug"];
        document.querySelector("#"+ String(slug)).style.background = "background: linear-gradient(rgba(0,0,0,0), #000), url(/assets/img/" + slug + ".jpg);";

    }
}