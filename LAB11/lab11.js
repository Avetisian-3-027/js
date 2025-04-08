class Auto {
    isStarted = false
    start() {
        console.log("Двигатель - запущен!")
        this.isStarted = true
    }
    stop() {
        console.log("Двигатель - заглушен!")
        this.isStarted = false
    }
}

let auto = new Auto
console.log(auto.isStarted)
auto.start()
console.log(auto.isStarted)
auto.stop()
console.log(auto.isStarted)
