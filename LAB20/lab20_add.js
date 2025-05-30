class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  describe() {
    return `Фрукт ${this.name} має колір ${this.color}.`;
  }
}

const apple = new Fruit("яблуко", "червоний");
console.log(apple.describe());