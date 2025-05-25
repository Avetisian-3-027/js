document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button")
    if (buttons.length > 0) {
      buttons[0].addEventListener("click", function () {
        this.textContent = "Текст змінено!"
      })
    }
  })