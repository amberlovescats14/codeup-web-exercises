//z: FOR LOOP
const showMultiplicationTable = num => {
    for(let i=0; i<10; i++){
        console.log(`${num} * ${i+1} = `, num * (i+1))
    }
    return num;
}

//z: 10 random numbers between 20-200... are they even?
const func = () => {
    for(let i=0; i<10; i++){
        let random = Math.floor(Math.random() * 200) + 20;
        if(random % 2 === 0) console.log(random, `is even.`)
        else console.log(random, `is odd.`)
    }
    return null
}

//z: create a tree of number 1-9
const func2 = () => {
    for(let i=0; i<9; i++){
        let str = (i +1).toString()
        let num = i+1
        console.log(str.repeat(num))
    }
    return null
}

//z:
const func3 = () => {
    for(let i=100; i>0; i-=5){
        console.log(i)
    }
    return null
}
func3()
