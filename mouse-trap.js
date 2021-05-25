export function createCircle() {
    let elem = document.querySelector('.box')
    let rect = elem.getBoundingClientRect()
    addEventListener('click', (event) => {
        let div = document.createElement('div')
        div.style.background = 'white'
        div.className = 'circle'
        div.style.left = event.clientX-25+"px"
        div.style.top = event.clientY-25+"px"
        isInTheBox(event, rect) ? div.style.background = 'var(--purple)' : div.style.background = 'white'
        document.body.appendChild(div)
    })
}
export function moveCircle() {
    let elem = document.querySelector('.box')
    let rect = elem.getBoundingClientRect()
    let trapped = false
    addEventListener('mousemove', (event) => {
        if(document.body.querySelectorAll('.circle').length > 0) {
            let divs = document.querySelectorAll('.circle')
            let circle = divs[divs.length-1]
            circle.style.left = event.clientX-25+"px"
            circle.style.top = event.clientY-25+"px" 
            console.log(trapped)
            if(isInTheBox(event, rect)) {trapped=true}
            if(trapped){trap(event, circle, rect)}
        }
    })
    
}

export function setBox() {
    let box = document.createElement("div")
    box.className = "box"
    document.body.appendChild(box)
}

function isInTheBox(event, rect) {
    if(event.clientX-25 > rect.left && 
        event.clientX+25 < rect.right &&
        event.clientY-25 > rect.top &&
        event.clientY+25 < rect.bottom) {
            return true
    }
    return false
}

function trap(event, circle, rect) {
    circle.style.background = 'var(--purple)'
    if(event.clientX-25 < rect.left){circle.style.left = rect.left+"px"}
    if(event.clientX+25 > rect.right){circle.style.left = rect.right-50+"px"}
    if(event.clientY-25 < rect.top){circle.style.top = rect.top+"px"}
    if(event.clientY+25 > rect.bottom){circle.style.top = rect.bottom-50+"px"}    
    
}