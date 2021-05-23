export function generateLetters() {
    const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let size = 10
    for(let i=1; i<=120;i++) {
        let letter = Math.floor(Math.random() * allLetters.length)
        let div = document.createElement("div")
        div.textContent = allLetters[letter]
        div.style.fontSize = `${size + i}px`
        if(i<=40){div.style.fontWeight = "300"}
        else if(i<=80){div.style.fontWeight = "400"}
        else {div.style.fontWeight = "600"}
        document.body.appendChild(div)
    }
}