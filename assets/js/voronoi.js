var points = [
    [55,10],
    [45, 67],
    [23, 81],
    [10,11],
    [65,45]
]

var d_trianlges = [];

function convertPoints(list) {
    var w = document.querySelector("#voronoi").clientWidth;
    var h = document.querySelector("#voronoi").clientHeight;
    for(var i = 0; i < list.length; i++) {
        list[i][0] = Math.round(w* (list[i][0]/100))
        list[i][1] = Math.round(h* (list[i][1]/100))
    }

    return list;
}

function calc_delaunay() {

}

function calc_voronoi() {
    points = convertPoints(points);
    
    for(var i = 0; i < points.length; i++) {
        drawPoint(points[i], "#000");
        console.log(points[i]);
    }

color = 255;
    var possible_triangles = n_choose_3(points);
    possible_triangles.forEach((item, index)=> {
        var bi = bisector(item);
        var radius = Math.round(distance(item[2], bi));
        var valid_triangle = true;
        for(var i = 0; i < points.length; i++) {
            if(distance(points[i], bi) < radius) {
                valid_triangle = false;
                break;
            }
        }

        drawPoint(bi, "#FF0000")

        console.log(item[0], item[1], item[2], valid_triangle)

        if(valid_triangle) {
            d_trianlges.push(item);
        }
    })

    

    d_trianlges.forEach((item, index) => {
        drawTriangle(item, "rgb(" + String(color)+ "," + String(color) + ", 0)" );
        color -= 25;
    })
}   

function drawCircle(p, r) {
    
    var d = document.createElement('div');
    d.style.height = r*2 + "px";
    d.style.width = r*2 + "px";
    d.style.position = "absolute"
    d.style.borderRadius = r + "px"
    d.style.border = "5px solid black"
    d.style.left = (p[0] - r ) + "px";
    d.style.bottom = (p[1] - r) + "px";
    d.style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector('#voronoi').appendChild(d);
}

function drawTriangle(tri, color) {
    var d = document.createElement('div');
    d.style.width = document.querySelector("#voronoi").clientWidth + "px";
    d.style.height = document.querySelector("#voronoi").clientHeight + "px";
    d.style.position = "absolute"
    d.style.backgroundColor = color;
    d.style.left = 0;
    d.style.bottom = 0;
    d.style.boxShadow = "inset 0 0 12px #000";
    var clip = "polygon(" ;
    
    for(var i =0; i < 3; i++) {
        clip += String(tri[i][0]) + "px " + String(document.querySelector("#voronoi").clientHeight- tri[i][1]) + "px " + ((i == 2) ? ' ' : ',');
    }
    clip += ")"
    
    d.style.clipPath = clip;
    document.querySelector('#voronoi').appendChild(d);
}

function drawPoint(p, color) {
    var d = document.createElement('div');
    d.className = "pt point-" + Math.round(p[0]) + "-" + Math.round(p[1]);
    d.style.width = "10px";
    d.style.height = "10px";
    d.style.position = "absolute"
    d.style.backgroundColor = color;
    d.style.left = p[0] + "px";
    d.style.bottom = p[1] + "px";
    document.querySelector('#voronoi').appendChild(d);
}

//tri is a list of length 3 containing pairs - the points of a triangle
//returns a point
function bisector(tri) {
    var A = tri[0];
    var B = tri[1];
    var C = tri[2];

    var mdptAB = midpoint(A,B);
    var mdptBC = midpoint(B,C);


    var m1 = -1/slope(A,B);
    var m2 = -1/slope(B,C);

    var x1 = mdptAB[0];
    var y1 = mdptAB[1];

    var x2 = mdptBC[0];
    var y2 = mdptBC[1];

    var x = ((y1-(m1*x1)) - (y2 - (m2*x2)))/(m2 - m1);
    var y = (m1*x) + (y1 - (m1*x1));
    if(x == NaN && y == NaN) {
        
    }
    return [Math.round(x),Math.round(y)];
}

function n_choose_3(list) {
    var size = list.length;
    var combinations = [];
    for(var i = 0; i < size; i++) {
        for(var j = i; j < size; j++) {
            for(var k = j; k < size; k++ ) {
                if((i != j && j != k && i != k )) {
                    combinations.push([list[i],list[j],list[k]]);
                }
            }
        }
    }
    return combinations;
}

function slope(p1,p2) {
    return Math.round(p1[1] - p2[1])/(p1[0] - p2[0]);
}

function midpoint(p1,p2) {
    return [Math.round((p1[0] + p2[0])/2), Math.round((p1[1]+p2[1])/2)];
}

function distance(p1, p2) {
    return Math.round(Math.sqrt( Math.pow(p1[0]-p2[0], 2) + Math.pow(p1[1]-p2[1], 2)))
}

window.addEventListener("DOMContentLoaded", (event) => {
    calc_voronoi();
 });