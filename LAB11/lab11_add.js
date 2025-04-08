let computer = {
    isOn: false,
    turnOn() {
        console.log("Компьютер - включен...")
        this.isOn = true
    },
    turnOff() {
        console.log("Компьютер - выключен...")
        this.isOn = false
    }
}

console.log(computer.isOn)
computer.turnOn()
console.log(computer.isOn)
computer.turnOff()
console.log(computer.isOn)
