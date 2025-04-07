function calc_sum(arg1, arg2) {
    return (arg1 + arg2)
}
function calc_ded(arg1, arg2) {
    return (arg1 - arg2)
}
function calc_mult(arg1, arg2) {
    return (arg1 * arg2)
}
function calc_div(arg1, arg2) {
    return (arg1 / arg2)
}

function calc(arg1, arg2, calc_operation) {
    if (calc_operation == calc_div && arg2 == 0)
        return "Деление на ноль - не возможно"
    return calc_operation(arg1, arg2)
}
console.log(calc(10, 5, calc_sum))
console.log(calc(10, 3, calc_ded))
console.log(calc(10, 3, calc_mult))
console.log(calc(10, 5, calc_div))
console.log(calc(10, 0, calc_div))
