document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput")
  const button = document.getElementById("addBtn")
  const list = document.getElementById("taskList")

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  function renderTasks() {
    list.innerHTML = ""
    tasks.forEach((task, index) => {
      const li = document.createElement("li")
      li.textContent = task.text
      if (task.done) li.classList.add("done")

      li.addEventListener("click", () => {
        tasks[index].done = !tasks[index].done
        saveTasks()
        renderTasks()
      })

      li.addEventListener("contextmenu", e => {
        e.preventDefault()
        tasks.splice(index, 1)
        saveTasks()
        renderTasks()
      })

      list.appendChild(li)
    })
  }

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
      tasks.push({ text, done: false })
      input.value = ""
      saveTasks()
      renderTasks()
    }
  })

  renderTasks()
})