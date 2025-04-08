const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let customElement = 3
const middleIndex = Math.floor(array.length / 2)
const newArray = [...array.slice(0, middleIndex), customElement, ...array.slice(middleIndex)]
console.log(newArray)
