//* set timeouts


const func = name => console.log(`Hello ${name}`)

//z: AWAIT ....runs once
setTimeout(func, 1000, 'Amber')

let count = 0
const whatsUp = name => {
    console.log(`Whats Up ${name}`)
    console.log(count)
    count++
    if(count > 3) clearInterval(interval)
}
//z:
let interval = setInterval(whatsUp, 1000, 'Amber' )



