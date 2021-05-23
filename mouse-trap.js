export function createCircle() {
    addEventListener('click', (event) => {
        let div = document.createElement('div')
        div.style.background = 'white'
        div.className = 'circle'
        div.style.left = event.clientX-25+"px"
        div.style.top = event.clientY-25+"px"
        document.body.appendChild(div)
    })
}
export function moveCircle() {}
export function setBox() {}