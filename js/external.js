console.log(`Hello from external JavaScript`)

alert(`Welcome to my Website`)


let favoriteColor = prompt(`What is your favorite color?`)
const response = () => (
    favoriteColor.trim().toLowerCase() === 'blue' ?
        alert(`Great! Blue is my favorite color too!`) :
        alert(`Wow! ${favoriteColor} is very beautiful!`)
)
response()

//---------movies
let moviesRented = [
    {
        name: "The little mermaid",
        days: Number(prompt(`Rental days? (The Little Mermaid)`))
    },
    {
        name: "Brother Bear",
        days: Number( prompt(`Rental days? (Brother Bear)`))
    },
    {
        name: "Hercules",
        days: Number(prompt(`Rental days? (Hercules)`))
    }
]

const amountDueForRentals = arr => arr.reduce((a,{days})=> a + days, 0) * 3;


alert(`The amount for your rentals is ${amountDueForRentals(moviesRented)}`)

//---------- weekly pay

let myCompanies = [
    google = {
        pay: 400,
        time: Number(prompt(`How many hours did you work? (Google)`))
    },
    amazon = {
        pay: 380,
        time: Number(prompt(`How many hours did you work? (Amazon)`))    },
    facebook = {
        pay: 350,
        time: Number(prompt(`How many hours did you work? (Facebook)`))    }
];

const calculateWeeklyPay = arr => {
    let pay = 0;
    arr.forEach(a => {
        pay += a.time * a.pay
    })
    return pay
}
alert(`Your pay this week is ${calculateWeeklyPay(myCompanies)}`)

//________________________class availability

let classSize = 30
let numberOfStudents = 21
const spaceAvailable = () => {
    if(numberOfStudents >= classSize) alert(`This class is full`)
    let conflicting = prompt(`Does this class conflict with your current schedule? (y/n)`)
    if(conflicting.toLowerCase() === 'y') alert(`This class conflicts with your current schedule`)
    else alert(`Registration complete.`)

}
spaceAvailable()

//_---------------login
const login = {
    username: prompt(`Username: `),
    password: prompt(`Password: `)
}

const verification = (obj) => {
    const { username, password } = obj;
    let noWhiteSpace = new RegExp(/^\s|\s$/)
    
    if(password.length >= 5)
        if(password.indexOf(username) < 0)
            if(username.length <= 20)
                if(!noWhiteSpace.test(username) && !noWhiteSpace.test(password))  alert(`Login Successful`)
    else alert(`Incorrect Username or Password`)
    

}
verification(login)

