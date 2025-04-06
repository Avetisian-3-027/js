//----
//ex1|
//----
/*
let temperature = 0

if (temperature < 0) {
    console.log("Температура отрицательная: \"Очень холодно\"")
} else if (temperature < 18) {
    console.log("Температура положительная: \"Прохладно\"")
} else {
    console.log("Температура положительная: \"Тепло\"")
}
*/
//----
//ex2|
//----
/*
let a = 2
console.log(a % 2 === 0 ? "Число, чётное" : "Число, не чётное")
*/
//----
//ex3|
//----
/*
let day = "Понедельник"

switch (day.toLowerCase()) {
    case "понедельник":
        console.log("Это первый день недели!")
        break
    case "вторник":
        console.log("Это второй день недели!")
        break
    case "среда":
        console.log("Это третий день недели!")
        break
    case "четверг":
        console.log("Это четвёртый день недели!")
        break
    case "пятница":
        console.log("Это пятый день недели!")
        break
    case "суббота":
        console.log("Это шестой день недели!")
        break
    case "воскресенье":
        console.log("Это седьмой день недели!")
        break
    default:
        console.log("Такого дня недели нет!")
        break
}
*/
//----
//ex4|
//----
/*
function passwordChecker(password) {
    if (password == "admin123") {
        return console.log("Доступ разрешён...")
    } else {
        return console.log("Доступ запрещён...")
    }
}
let try1 = "admin321"
let try2 = "admin321"

passwordChecker(try1)
passwordChecker(try2)
*/