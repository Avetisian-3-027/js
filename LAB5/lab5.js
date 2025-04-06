//----
//ex1|
//----
/*
for (let i = 0; i < 21; i++) {
    if ((i % 2) == 0)    
        console.log(i)
}
*
//----
//ex2|
//----
/*
let n = -5
while (n < 1) {
    console.log(n)
    n += 0.7
}
*/
//----
//ex3|
//----
/*
let number

do {
  number = prompt("Введите позитивное число:")
  number = Number(number)
} while (isNaN(number) || number <= 0)

alert("Благодарим! Вы ввели: " + number)
*/
//----
//ex4|
//----
/*
const person = {
    name: "Іван",
    age: 30,
    city: "Київ"
  }
  
  for (let key in person) {
    console.log(key + ": " + person[key])
  }
*/
//----
//ex5|
//----
/*
const numbers = [1, 2, 3, 4, 5]

for (let value of numbers.reverse()) {
  console.log(value)
}
*/
//----
//ex6|
//----
/*
const array = [4, 9, 16, 25, 7, 12]

console.log("Елементи масиву:")
array.forEach((num) => {
  console.log(num)
})

const squares = array.map((num) => num * num)
console.log("Квадрати чисел:", squares)

const greaterThanTen = array.filter((num) => num > 10)
console.log("Числа більше 10:", greaterThanTen)
*/