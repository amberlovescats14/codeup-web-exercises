// // //: while
// //
// // let i = 0
// // while(i< 10){
// //     console.log("iteration" + i)
// //     i++
// // }
//
// //
//
// // //@WILL NEVER RUN
// // let myQuestion;
// // while (myQuestion){
// //     myQuestion = confirm(`would you like to exit`)
// // }
// //------------
//
// //z: while loop
//
// let todoList = []
// console.log("Welcome to the todo List")
// while(true){
//     let item = prompt("Todo Item: ")
//     todoList.push(item)
//     let bool = confirm(`Would you like to add another item?`)
//     if(!bool) break;
// }
// todoList.forEach(t=> console.log(t))
// let div = document.getElementById('list')
// todoList.forEach(t => {
//     let h4 = document.createElement('h4')
//     div.appendChild(h4).innerHTML = t;
// })
//
//
// //z: do while
//
// let doing = []
// do{
//     let item = prompt(`Todo item: `)
//     doing.push(item)
//     let bool = confirm(`Would you like to add another`)
//     if(!bool) break
// }while (true)
//
//
//
// //z: color === blue
// do{
//     let choice = prompt(`Please choose a color: `)
//     if(color.toLowerCase() === 'blue') break;
// }while(true)
//
//
// let choice
// do{
//     choice = prompt(`Please choose color: `)
// }while(choice.toLowerCase() !== 'blue')
//
// //z: randomcolors
// let randomColors = ["red", 'orange', 'yellow', 'blue', 'green']


// const fizzBuzz = num => {
//     if(num % 3 === 0) console.log(`fizz`)
//     if(num % 5 === 0) console.log(`buzz`)
//     else console.log(num)
// }
const fizzBuzz = num => {
    if(num % 3 === 0 ) console.log(`fizz`)
    if(num % 5 === 0 ) console.log(`buzz`)
    else console.log(num)
}

const breaking = () => {
    for(let i=0; i<100; i++){
        if(i%2 ===0)
            console.log(i)
        if(i === 60) break;
    }
    return null
}

