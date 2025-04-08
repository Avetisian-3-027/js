function gradeLevelDisplay(argue) {
    if (argue < 0 || argue > 100 || isNaN(argue)) {// защита от дурака
        alert("Некорректный ввод")
        return 1
    }
    else if (argue <= 49)
        alert("Тест не сдан! Балл слишком низок...") 
    else if (argue <= 69)
        alert("Тест сдан! Балл удовлетворительный...")
    else if (argue <= 89)
        alert("Тест сдан! Балл хороший...")
    else if (argue <= 100)
        alert("Тест сдан! Балл отличный...")
    return 0
}

while(true) { // мне надоело по сто раз перезапускать html файл
    let user_input = prompt("Введите свой балл: ")
    if (user_input === null)
        break
    if (!(gradeLevelDisplay(parseInt(user_input, 10))))
        break
}
close()