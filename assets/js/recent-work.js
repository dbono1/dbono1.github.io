var work = [
    {"title":"Comics", "slug":"week02", "link":"/hw2/hw2.html", "date":"2020-09-10"},
    {"title":"Week 04", "slug":"week04", "link":"/hw4/hw4.html", "date":"2020-09-20"},
    {"title":"Slideshow", "slug":"week04", "link":"/slideshow/project.html", "date":"2020-09-20"},
    {"title":"The Crito", "slug":"week05", "link":"/hw5-netart/hw5-start.html", "date":"2020-10-10"},
    {"title":"MidtermProposal", "slug":"midterm", "link":"/midterm/proposal/proposal.html", "date":"2020-10-15"}
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

    }
}