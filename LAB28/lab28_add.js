function saveState() {
  const checkbox1 = document.getElementById("checkbox1").checked
  const checkbox2 = document.getElementById("checkbox2").checked
  localStorage.setItem("checkbox1", checkbox1)
  localStorage.setItem("checkbox2", checkbox2)

  const radios = document.getElementsByName("color")
  for (let radio of radios) {
    if (radio.checked) {
      localStorage.setItem("selectedColor", radio.value)
    }
  }
}

function restoreState() {
  document.getElementById("checkbox1").checked = localStorage.getItem("checkbox1") === "true"
  document.getElementById("checkbox2").checked = localStorage.getItem("checkbox2") === "true"

  const selectedColor = localStorage.getItem("selectedColor")
  if (selectedColor) {
    const radios = document.getElementsByName("color")
    for (let radio of radios) {
      if (radio.value === selectedColor) {
        radio.checked = true
      }
    }
  }
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("change", saveState)
})

window.addEventListener("load", restoreState)