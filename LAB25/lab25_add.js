function замінити() {
    const container = document.getElementById('container');
    const oldElement = document.getElementById('old');

    const newElement = document.createElement('p');
    newElement.textContent = "Новий елемент";

    container.replaceChild(newElement, oldElement);
  }