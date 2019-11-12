"use strict";

 //*              EXPONENTIATION
let x = 4 ** 5

let random = Math.floor(Math.random() * 2 ** 3)

const myArray = ["it", "is", "really", "cold", "outside"]
for (let a of myArray) {
    console.log(a)
}

//TO DO: using a for ... of loop, iterate over the array of instructors. If
// the instructor is Sophie or David, console log the name.

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
];
for (let i of instructors) {
    if(i === 'David') console.log(i)
    if(i === 'Sophie') console.log(i)
}






/*********************************************
 *              Objects
 ******************************************** */
    
// TO DO: Refactor the Object below to use shorthand property assignment

const mydog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog: mydog,
    cat: cat,
    mouse: mouse
};

// TO DO TOGETHER: Use Object Destructuring to refactor

const make = 'nissan';
const model= 'rogue';
const color = 'white';




//! OBJECT DESTRUCTURE
const myCar = {
    make,
    model,
    color
};

const carInfo = ({make, model}) => {
   return `${make} and ${model}`
};

console.log(carInfo(myCar))

//BONUS: Array Destructuring.