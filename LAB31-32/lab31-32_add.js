function ReadFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fileContent = "Рядок 1\nРядок 2\nРядок 3"
      resolve(fileContent)
    }, 1000)
  })
}

async function readAndProcessFile() {
  try {
    const content = await ReadFile()
    const lines = content.split("\n")

    const output = lines.map((line, index) => `${index + 1}: ${line}`).join("\n")

    document.getElementById("output").textContent = output
  } catch (err) {
    document.getElementById("output").textContent = "Помилка: " + err.message
  }
}

readAndProcessFile()