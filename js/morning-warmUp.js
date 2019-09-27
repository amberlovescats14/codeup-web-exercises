//  node js/morning-warmUp.js

//FIXME: fixme and todo comments are green by default
//a: This comment is red
//b: This comment is blue
//c: This comment is pink


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

const helloName = name => `Hello ${name}.`
console.log(helloName('Amber'))

const returnFirstElement = arr => arr[0];
console.log(returnFirstElement([1,2,3,4,5]))

const areaOfEquilateralTriangle = num => {
    return (Math.sqrt(3) / 4 ) * (num ** 2)
}
//d:  OR
const areaOfEquilateralTriangle = num => {
    return findAreaOfTriangle(num, num, num);
}

console.log(areaOfEquilateralTriangle())
