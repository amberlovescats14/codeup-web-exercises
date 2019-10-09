"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
const askNumber = () => {
    const numbers =  () => {
        let num = Number(prompt(`What number?`))
        
        num % 2 === 0 ? alert(`Cool, this number is even.`) :
            alert(`Cool, this number is odd.`)
        
        alert(`Also, ${num} + 100 = ${num + 100}`)
        
        num > 0 ? alert(`This number is also positive!`) :
            alert(`This number is also negative!`)
    }
    
    //@ This part runs first
    let yesOrNo = confirm(`Would you like to enter a number?`)
    yesOrNo ? numbers() : ''
}
// askNumber()

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
const analyzeColor = strColor => {
    console.log(strColor)
    if(strColor === 'red') return `Red is my favorite color`;
    else if(strColor === 'orange') return `Orange like orange juice`;
    else if(strColor === 'yellow') return `Yellow like the Sun`;
    else if(strColor === 'green') return `I need to cut my Green grass`;
    else if(strColor === 'blue') return `I love Blue water`;
    else if(strColor === 'indigo') return `Indigo is purple`;
    else if(strColor === 'violet') return `Violet is from Lavender Lane`;
    else return `Please enter a color of the rainbow`
}
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
const analyzeColor2 = strColor => {
    console.log(strColor)
    switch(strColor){
        case 'red': return `Red is my favorite color`;
        case `orange`: return `Orange like orange juice`;
        case `yellow`: return `Yellow like the Sun`;
        case `green`: return `I need to cut my Green grass`;
        case `blue`: return `I love Blue water`;
        case `indigo`: return `Indigo is purple`;
        case `violet`: return `Violet is from Lavender Lane`;
        default: return `Please enter a color of the rainbow`
    }
}
// analyzeColor2(randomColor)
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let color = prompt(`Please enter a color: `)
const analyzeColor3 = strColor => {
    switch(strColor){
        case 'red': return alert(`Red is my favorite color`);
        case `orange`: return alert(`Orange like orange juice`);
        case `yellow`: return  alert(`Yellow like the Sun`);
        case `green`: return alert(`I need to cut my Green grass`);
        case `blue`: return alert(`I love Blue water`);
        case `indigo`: return alert(`Indigo is purple`);
        case `violet`: return alert(`Violet is from Lavender Lane`);
        default: return alert(`Please enter a color of the rainbow`)
    }
}
analyzeColor3(color)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const calculateTotal = (luckyNumber, total) => {
    switch(luckyNumber){
        case 0: return total;
        case 1: return total - (total * .10)
        case 2: return total - (total * .25)
        case 3: return total - (total * .35)
        case 4: return total / 2
        case 5: return 0
    }
}
// console.log(calculateTotal(2, 129))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const drawingLuckyNumber = () => {
    let luckyNumber = Math.floor(Math.random() * 6);
    let bill = Number(prompt(`Hello, how much was your bill?`))
    alert(`Your lucky number is ${luckyNumber}`)
    return calculateTotal(luckyNumber, bill)
}
console.log(drawingLuckyNumber())