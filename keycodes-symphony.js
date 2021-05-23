export function compose() {
    window.addEventListener('keydown', (event) => {
        if(event.key.match(/[a-z]/g) && event.key.length === 1) {
            let div = document.createElement("div")
            div.className = 'note'    
            div.textContent = event.key
            div.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            document.body.appendChild(div)
        }
        if(event.key === 'Backspace'){document.body.removeChild(document.body.lastChild)}
        if(event.key === 'Escape'){document.body.querySelectorAll("div").forEach(element => element.remove())}
    })
}