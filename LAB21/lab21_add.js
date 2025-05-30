class Користувач {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  представитися() {
    console.log(`Мене звати ${this.name}.`);
  }
}

class Адміністратор extends Користувач {
  видалитиКористувача(користувач) {
    console.log(`Користувача ${користувач.name} було видалено.`);
  }
}

const user = new Користувач("Олена", 25);
user.представитися();

const admin = new Адміністратор("Ігор", 30);
admin.представитися(); 
admin.видалитиКористувача(user); 