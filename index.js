/*var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};*/

var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle v2 with l = "+l+" and b = "+b);

    rect(l,b, (err,rectangle)=>{
        if(err){
            console.log("Error: "+err.message);
        }
        else{
            console.log("Area: "+rectangle.area());
            console.log("Perimeter: "+rectangle.perimeter());
        }
    });
    console.log("This statment is after the call to rectangle");
}

solveRect(2,4);

solveRect(3,7);

solveRect(0,4);