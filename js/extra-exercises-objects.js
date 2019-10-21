const fetch = require('node-fetch')
const axios = require('axios')
const isString = value => typeof value === 'string'

const makeCar = (a, b) => {
    if(isString(a) && isString(b)) return {make: a, model: b}
}

const salesReport = {
    tile: "Quarterly",
    date: Date.now(),
    office: "San Antonio",
    employees: [],
    totalEmployees : 0
}

const addEmployee = (first, last, report) => {
    let newEmployee = {
        id: salesReport.totalEmployees++,
        firstName: first,
        lastName: last,
        salesUnit: report
    }
    salesReport.employees.push(newEmployee)
}
addEmployee("Jane", "Janeway", 3)
addEmployee("Tricia", "Triciason", 5)
addEmployee("Jeannette", "Jeanson", 2)
addEmployee("Charles Emmerson III", "Winchester", 2)
addEmployee("Chet", "Cheddereson", 8)
addEmployee("Chaiam", "Chaiamson", 12)
addEmployee("Dale", "Dalesinger", 1)
addEmployee("Zig", "Ziglar", 50)
addEmployee("Henry", "Kissinger", 1)
addEmployee("Arthur Herbert", "Fonzarelli", 23)
addEmployee("Betty", "Boop", 67)

salesReport.getEmployeeCount = function () {
    return this.totalEmployees;
}

salesReport.getAverageSalesPerEmployee = function () {
    let totalSales = this.employees.reduce((a,{salesUnit}) => a + salesUnit, 0)
    return totalSales / this.totalEmployees
}

// fetch
let userContent = []
const getUserContent = async () => {
    try {
     let getUserContent  = await fetch('https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json')
            .then(res => res.json())
            .then(data => userContent = data )
    } catch (e) {
        console.log(`Fetch ERROR`)
        console.error(e.message)
    }
}

console.log(userContent)




let profileReport = {}
profileReport.getProfileCount = function (arr) {
    return arr.length
}
profileReport.getActiveCount = function (arr) {
    let count = 0
    arr.forEach(a => {
        if(a.isActive === true) count++
    })
    return count
}
// console.log(profileReport.getActiveCount(userContent))