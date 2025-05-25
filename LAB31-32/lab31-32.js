const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Проміс виконано через 2 секунди!")
  }, 2000)
})

myPromise.then(message => {
  console.log(message)
})