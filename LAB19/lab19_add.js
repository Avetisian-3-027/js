const array = ["яблуко", "груша", "банан", "ананас", "ківі", "полуниця", "диня"]

const totalLength = array.reduce((sum, fruit) => sum + fruit.length, 0)

console.log("Загальна довжина рядків:", totalLength)