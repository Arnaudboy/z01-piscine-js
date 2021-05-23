export function createCircle() {
    document.body.addEventListener('click', (event) => {
        let div = document.createElement('div')
        div.style.background = 'white'
        div.className = 'circle'
        div.style.left = event.clientX+"px"
        div.style.top = event.clientY+"px"
        document.body.appendChild(div)
    })
}
export function moveCircle() {}
export function setBox() {}