//  node js/morning-warmUp.js

//FIXME: fixme and todo comments are green by default
//x: This comment is red
//y: This comment is blue
//z: This comment is pink

//! HELPER_FUNCTIONS //
const isString = value => typeof value === 'string'

const isNumeric = value => value == parseFloat(value)

//!---------------------




const func = (a, b) => a + b;
func(1,2);

//5, 6, 7
const findAreaOfTriangle =( a, b, c) => {
    let p = (a + b + c) / 2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
// console.log(findAreaOfTriangle(5,6,7));

const sayHi = () => 'Hi'
// console.log(sayHi());

const helloName = name => `Hello ${name}.`
// console.log(helloName('Amber'))

const returnFirstElement = arr => arr[0];
// console.log(returnFirstElement([1,2,3,4,5]))

// const areaOfEquilateralTriangle = num => {
//     return (Math.sqrt(3) / 4 ) * (num ** 2)
// }
//d:  OR
const areaOfEquilateralTriangle = num => {
    return findAreaOfTriangle(num, num, num);
}

// console.log(areaOfEquilateralTriangle(3))

const concatenates = (a,b,c) => `${a} ${b} ${c}`
// console.log(concatenates("Hello", "Deimos", "Class"))

const capitalize = str => str.toUpperCase()
// console.log(capitalize('granola bar'))

//provided diameter
const findAreaOfCircle = d => (
    (1/4) * Math.PI * (d ** 2)
)
// console.log(findAreaOfCircle(5))

//quadrilateral is a 4 sided shape
const perimeterOfQuadrilateral = (a, b, c ,d) => a + b + c + d

const primitive = a => typeof(a)
// console.log(primitive(3))

const positiveEvenNum = num => (num > 0) && (num % 2 === 0);
// console.log(positiveEvenNum(6));
// console.log("__________________")

const greaterThanFive = num => num >= 5;

//@ 10/9/2019
const askForString = () => {
    let prompt = prompt("Please enter your name: ")
    if(prompt == '') return alert(helloThereStranger())
    else return alert(helloThereStranger(prompt))
}
const helloThereStranger = (str = "Stranger") => {
    return `Hello there ${str}`
}

const quotent = (a, b) => (
    typeof a === 'number' && typeof b === 'number' ? Number(a) / Number(b) : false
)

const printArray = arr => arr.forEach(a => a)

const isEightCharicters = str =>
    str.length >= 8  && typeof str === 'string' ? true : false



const roundDown = float => isNumeric(float) ? Math.floor(parseFloat(float)): ''

//!I DONT KNOW HOW TO COUNT UP RERCURSIVLY
// const counting = (num) => {
//     num--
//     if(num === 0) return `done`;
//     return (10 - num )+ counting(num)
// }
// console.log(counting(10))


const counting = num => {
    let count = 0
    while(true){
        console.log(count)
        count++
        if(count === num ) break;
    }
    return count
}
const createPersonObject = (name, age) => {
    if(isString(name))
        if(isNumeric(age))
            return {
            name,
            age,
        }
}
console.log(createPersonObject("amber", 32))