function sum(...args) {
    return args.reduce((mainarg, arg) => mainarg + arg, 0)
}

console.log(sum(1,3,5,7,9,11))
