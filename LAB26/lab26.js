document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button")
    const message = document.getElementById("message")
  
    button.addEventListener("click", function () {
      message.textContent = "Кнопку натиснуто!"
    })
  })