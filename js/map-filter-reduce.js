const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const lessThanThree = arr => arr.filter(a=> a.languages.length < 3)

const listOfEmails = arr => arr.map(a => a.email)

const totalYears = arr => arr.reduce((a,{yearsOfExperience})=> a+yearsOfExperience,0)

let average = totalYears(users) / users.length

const longestEmail = arr => (
     arr.reduce((a,{email})=> {
        if(email.length > a.length) a = email
        return a
    },'').length
)

const usersNames = arr => (
    arr.reduce((a,{name})=> a += `${name.toUpperCase()}, `,'')
)
console.log(usersNames(users))