//! The last six (Even More Function Bonuses)
//1..
const howManyWhiteSpaces = str => {
    let count = 0
    let whiteSpace = new RegExp(/\s/)
    for(let i=0; i<str.length; i++){
        if(whiteSpace.test(str[i])) count++
    }
    return count
}
// console.log(howManyWhiteSpaces(" amber "))

//2..
const matchingStrings = (str1, str2) => {
    if(str1.indexOf(str2) !== -1) return str1.replace(str2, '')
    else return str1
}
// console.log(matchingStrings("amberjonesamber", "amber"))

//3..
const lastLetterA = str => str[str.length-1].toLowerCase() === 'a'
console.log(lastLetterA("mamba"))

//4..
//@ This is a reapeat of number 1 of this section

//5..
const returnMessage = trueOrFalse => nestedReturnMessage(trueOrFalse)
    const nestedReturnMessage = trueOrFalse => `Hey, it's ${trueOrFalse}`

//6..
const willLoginUser = (username, password, age, boolAdmin) => {
    if(boolAdmin)
        if(username.indexOf(password) === -1) return true;
    if(username.indexOf(password) === -1)
        if(age >= 18) return true;
    return false
        
}

