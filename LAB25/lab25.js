document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
        this.textContent = "Текст змінено!"
    })
})