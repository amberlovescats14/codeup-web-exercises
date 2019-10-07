console.log(`Hello from external JavaScript`)

alert(`Welcome to my Website`)

let favoriteColor = prompt(`What is your favorite color?`)

const response = () => (
    favoriteColor.trim().toLowerCase() == 'red' ?
        alert(`Great! Red is my favorite color too!`) :
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

let moviesRented = [
    {
        name: "The little mermaid",
        days: Number(prompt(`How many`))
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