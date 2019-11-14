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

const fizzBuzz = () => {
    for (let i = 1; i < 100; i++) {
        console.log(`--${i}--`)
        if(i % 3 === 0) console.log(`FIZZ`)
        if(i % 5 === 0) console.log(`BUZZ`)
    }
    return null
}
const stringFive = (str) => {
    if(str.toLowerCase() === 'five') return 5
}

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

const mostOranges = (arr) => {
    let temp = 0
    let index = 0
    arr.forEach((a, i)=> {
        if(a.oranges > temp) {
            temp = a.oranges
            index = i
        }
    })
    return arr[index]
}

//! STUDEN ARRAY
let students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
]

const notRegistered = (arr) => {
    let final = []
    arr.forEach(a => {
        if(!a.isRegistered) final.push(a)
    })
    return final
}

//z: HAMSTERS

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
const sortedByHeightAscending = (arr) => {
    let sort = arr.sort((a,b)=> Number(a.heightInMM) > Number(b.heightInMM)? 1: -1)
}

const numbersToStrings = (num) => {
    if(isNumeric(num)){
        switch (num) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            default: return 'Not between 1-10'
        }
    }
}

const anotherWay = (num) => {
    let nums = [0,'one', 'two','three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten']
    if(isNumeric(num)) if(num > 0 && num < 11) return nums[num]
    else return `Number is not between 1-10`
}

const yourWelcome = (obj) => {
    if(obj.gratitude.toLowerCase() === 'Thank you') return `You're Welcome`
    else return false
}

const randomBool = () => {
    if(Math.random() > .5) return true
    else return false
}

const getEvenNumber = (arr) => (
    arr.filter(a => a % 2 === 0)
)
//! JUST A PROMISE NO FETCH
const evenPromise = num => {
    let promise = new Promise((resolve, reject) => {
        if(num % 2 === 0) resolve('Even')
        else reject('Not Even')
    })
    promise.then(()=> console.log(`Resolve`))
    promise.catch(()=> console.log(`Reject`))
}
console.log(evenPromise(2))