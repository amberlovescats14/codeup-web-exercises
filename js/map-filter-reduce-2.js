const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];
const firstLetters = arr => arr.map(a => a.charAt(0))

const userObjects = arr => arr.map(a => (
    {
        name: a.name,
        age: a.age
    }
))

const civilServants = arr => (
    arr.filter(a => a.occupation === 'Police Officer' ||
    a.occupation === 'Teacher')
)

const averageOfCustomers = arr => {
    let reduce = arr.reduce((a,b)=> a+ b.age, 0)
    return reduce / arr.length
}

const makeSuperPet = arr => {
    let name = arr.reduce((a,b)=> a+= `${b.name}_`, '')
    let age = arr.reduce((a,{age})=> a + age,0)
    let breed =  arr.map(a => a.breed.charAt(0))
    return {
        name,
        age,
        breed
    }
}

//! I couldnt figure out how to do this all in one line
const nameLengths = arr => {
    let pugs = arr.filter(a => a.breed === 'Pug')
    return pugs.map(p => p.name.length)
}

const getFemaleFamilyMembers = arr => {
    let females = arr.filter(a => a.gender === 'female')
    return females.map(f => f.name)
}

const makeLongPetString = arr => arr.reduce((a,{name,age,breed})=> a += `${name}-${age}-${breed}-`, '')


let names = ["Amber", "Cami", "Mason"]
const firstAndLastNames = arr => arr.map(a => `${a} Smith`)

let numbers = [1,2,3,4,5,6,7,8,9]
const sumOfEvens = arr => arr.reduce((a,b)=> {
    if(b % 2 === 0) a += b;
    return a
},0)

