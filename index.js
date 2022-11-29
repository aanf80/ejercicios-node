/*var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};*/

var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle v2 with l = "+l+" and b = "+b);

    if(l <= 0 || b <= 0){
        console.log("Rectangle dimension should be greater than zero");
    }
    else{
        console.log("Area: "+rect.area(l,b));
        
        console.log("Perimeter: "+rect.perimeter(l,b));
    }
    
}

solveRect(2,4);

solveRect(3,7);

solveRect(0,4);