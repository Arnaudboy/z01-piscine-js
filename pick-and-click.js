export function pick() {
    let hsl = document.createElement("div")
    hsl.className = "text hsl"
    let hue = document.createElement("div")
    hue.className = "text hue"
    let luminosity = document.createElement("div")
    luminosity.className = "text luminosity"
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    let liney = document.createElementNS("http://www.w3.org/2000/svg", "line")
    liney.setAttributeNS(null, "id", "axisY")
    let linex = document.createElementNS("http://www.w3.org/2000/svg", "line")
    linex.setAttributeNS(null, "id", "axisX")
    document.body.appendChild(svg)
    document.body.addEventListener('mousemove', (event) => {
        liney.setAttributeNS(null, "x1", "0")
        liney.setAttributeNS(null, "y1", `${event.clientY}`)
        liney.setAttributeNS(null, "x2", `${window.innerWidth}`)  
        liney.setAttributeNS(null, "y2", `${event.clientY}`)
        linex.setAttributeNS(null, "x1", `${event.clientX}`)
        linex.setAttributeNS(null, "y1", "0")
        linex.setAttributeNS(null, "x2", `${event.clientX}`)  
        linex.setAttributeNS(null, "y2", `${window.innerHeight}`)
        svg.appendChild(liney)  
        svg.appendChild(linex)  
        let x = Math.round((event.offsetX/window.innerWidth)*360)
        let y = Math.round((event.offsetY/window.innerHeight)*100)
        let color = `hsl(${x},50%,${y}%)`
        document.body.style.background = color
        hsl.textContent = color
        hue.textContent = x
        luminosity.textContent = y
        document.body.appendChild(hsl)
        document.body.appendChild(hue)
        document.body.appendChild(luminosity)
    })

    document.body.addEventListener('click', event => {
        const text = document.querySelector('.hsl')
        let textArea = document.createElement("textarea")
        textArea.value = text.textContent  
        document.body.appendChild(textArea) 
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
        //navigator.clipboard.writeText(text)
    })
}