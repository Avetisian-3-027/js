const greaterThanTen = (array) => array.filter(num => num > 10)
var array = []
for (let i = 0; i < 10; i++)
    array.push(Math.floor(Math.random() * 41))
const anotherArray = greaterThanTen(array)
console.log(array)
console.log(anotherArray)
