let currentLevel = 1

    function addNextHeading() {
      const heading = document.createElement('h1')
      heading.textContent = "Снизу будет добавлятся текст ↓"
      document.getElementById("container").appendChild(heading)
    }