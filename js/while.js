//z: WHILE

const whileDoubled = num => {
    while(true){
        num = num + num;
        console.log(num)
        if(num > 32768) break;
    }
}


//z:  DO WHILE
const sellingIceCream = () => {
    let total = Math.floor(Math.random() * 50) +50
    let count = 0
    do{
        let random = Math.floor(Math.random() * 5 ) +1;
        if(count + random > total) break;
        count += random;
        console.log(random, ' cones sold!')
    }while (true)
    if(total - count > 0){
        console.log(total - count, ' cones sold!')
        count += (total - count)
    }
    console.log(`All cones sold!`)
    return count
}




