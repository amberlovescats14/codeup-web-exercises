let moviesRented = [
    {
        name: "The little mermaid",
        days: 3
    },
    {
        name: "Brother Bear",
        days: 5
    },
    {
        name: "Hercules",
        days: 1
    }
]
//add up number of days * 3
const amountDueForRentals = arr => arr.reduce((a,{days})=> a + days, 0) * 3;
// console.log(amountDueForRentals(moviesRented))

//____________________

let myCompanies = [
    google = {
        pay: 400,
        time: 6
    },
    amazon = {
        pay: 380,
        time: 4
    },
    facebook = {
        pay: 350,
        time: 10
    }
]

//total up time and pay for each and add it to the totalAmount
const calculateWeeklyPay = arr => {
    let pay = 0;
    arr.forEach(a => {
        pay += a.time * a.pay
    })
    return pay
}
// console.log(calculateWeeklyPay(myCompanies))

//________________________

const ableToEnroll = (classNotFull, doesNotConflict) => classNotFull && doesNotConflict;

//_______________________
const canApplyOffer = (numOfItems, expired) => numOfItems > 2 && !expired
//______________________
let username = 'codeup';
let password = 'notastrongpassword'
let booleanPassword = password.length > 5
let booleanMatching = password.indexOf(username) === -1;
let booleanUsernameLength = username <= 20;

// TESTING to make sure there is not white space at the beggininig or the end of the username and password
//IF both are correct => true
let noWhiteSpace = new RegExp(/^\s|\s$/)
let good = !noWhiteSpace.test(username) && !noWhiteSpace.test(password)

console.log(good)

let ableToLogin = good &&
    booleanUsernameLength &&
    booleanPassword &&
    booleanPassword;
