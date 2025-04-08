function longestWordInString(...words) {
    let buffer = ''
    for (let word of words) {
        if (word.length > buffer.length)
            buffer = word
    }
    return buffer
}

let longestword = longestWordInString("Шла", "Саша", "по", "шоссе", "и", "сосала", "сушку") // не смеяться! НЕ СМЕЯТЬСЯ!
console.log(`Самое длинное слово: ${longestword}`)
