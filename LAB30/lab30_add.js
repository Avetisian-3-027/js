const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()

const resultList = document.getElementById("wednesdays")

const date = new Date(year, month, 1)

while (date.getMonth() === month) {
  if (date.getDay() === 3) { 
    const li = document.createElement("li")
    li.textContent = date.toDateString()
    resultList.appendChild(li)
  }
  date.setDate(date.getDate() + 1)
}