//  node js/morning-warmUp.js

const func = (a, b) => a + b;
func(1,2);

//5, 6, 7
const findAreaOfTriangle =( a, b, c) => {
    let p = (a + b + c) / 2
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
console.log(findAreaOfTriangle(5,6,7));

const sayHi = () => 'Hi'
console.log(sayHi());

const helloName = name => `Hello ${name}`
console.log(helloName('Amber'))