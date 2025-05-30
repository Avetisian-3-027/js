function throttle(func, delay) {
  let lastCall = 0
  return function (...args) {
    const now = new Date().getTime()
    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(this, args)
    }
  }
}

function onScroll() {
  console.log("Сторінка прокручується:", window.scrollY)
}

window.addEventListener('scroll', throttle(onScroll, 200))