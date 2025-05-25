document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("usernameInput")
  const button = document.getElementById("saveBtn")
  const greeting = document.getElementById("greeting")
  const savedName = localStorage.getItem("username")
  if (savedName) {
    greeting.textContent = `Привіт, ${savedName}!`
  }
  button.addEventListener("click", () => {
    const username = input.value.trim()
    if (username !== "") {
      localStorage.setItem("username", username)
      greeting.textContent = `Привіт, ${username}!`
    }
  })
})