//z: keep prompting for a number until its odd.
//z: print all numbers 1-50 EXCEPT the one chosen
const oddNumber = () => {
    let odd;
    while (true){
        odd = parseFloat(prompt(`Please enter a odd number: (1-50)`))
        if(odd % 2 !== 0) break;
    }
    console.log(`Number to skip is ${odd}`)
    for(let i=1; i<=50 ;i+=2){
        if(i === odd) continue;
        console.log(i)
    }
}
oddNumber()