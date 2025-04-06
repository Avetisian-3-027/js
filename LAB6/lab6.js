let array = []

for (let i = 0; i < 10; i ++) {
    array.push(Math.floor(Math.random() * 21))
}
console.log(array)
array.sort(function(a,b){ 
    return a - b
})
console.log(array)