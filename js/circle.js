(function() {
    "use strict";

    // create a circle object
    class Circle  {
        constructor(radius){
            this.radius = radius
        }
        getArea(){
            return Math.PI * (this.radius ** 2)
        }
        logInfo(doRounding){
            if(doRounding) {
                let r = Math.round(this.radius)
                let a = Math.round(this.getArea())
                return `A circle with a radius of ${r} has an area of ${a}`
            }
            return `A circle with a radius of ${this.radius} has an area of ${this.getArea()}`
        }

    }
    
    
    let circle = new Circle(10)
    console.log("CIRCLE_ONE");
    console.log(circle.logInfo(false))
    console.log("__ROUNDED__");
    console.log(circle.logInfo(true))
    
    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    let circle2 = new Circle(5)
    console.log("CIRCLE_TWO");
    console.log(circle2.logInfo(false))
    console.log("__ROUNDED__");
    console.log(circle2.logInfo(true))
})();

