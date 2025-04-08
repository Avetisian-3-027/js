function gradeLevelDisplay(argue) {
    if (argue < 0 || argue > 100 || isNaN(argue)) {// защита от дурака
        alert("Некорректный ввод")
        return 0
    }
    else if (argue <= 49)
        return alert("Тест не сдан! Балл слишком низок...") 
    else if (argue <= 69)
        return alert("Тест сдан! Балл удовлитворительный...")
    else if (argue <= 89)
        return alert("Тест сдан! Балл хороший...")
    else if (argue <= 100)
        return alert("Тест сдан! Балл отличный...")
}

while(true) { // мне надоело по сто раз перезапускать html файл
    if (gradeLevelDisplay(parseInt(prompt("Введите свой балл: "), 10)) != false)
        break
}
close()