document.addEventListener("DOMContentLoaded", function(event) {
    console.log("iran");

    var el = document.getElementById('leaky-code');
    
    for(var i = 0; i < 400; i++){
        var new_child = document.createElement("div");
        new_child.className = "matrix";
        var inner_str = "";
        var indent = Math.floor((Math.random() * 50) + 0);
        for(var j = 0; j < indent; j++){
            inner_str += "&nbsp;";
        }
        inner_str += Math.floor((Math.random() * 1) + 0);
        new_child.innerHTML += inner_str;
        
        new_child.style.animation = "falling-code";
        new_child.style.animationIterationCount = "infinite";
        new_child.style.animationDirection = "normal";
        new_child.style.animationDelay = Math.floor((Math.random() * 5) + 0) + "s";
        new_child.style.animationDuration = Math.floor((Math.random() * 100) + 0)/10 + "s";
        
        el.appendChild(new_child);
    }
    console.log("iran");
});