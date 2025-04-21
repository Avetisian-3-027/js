const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumArray = array.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber
}, 0)

console.log(sumArray)
