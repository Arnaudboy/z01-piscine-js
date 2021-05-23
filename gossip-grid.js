import {gossips} from './gossip-grid.data.js';

export function grid() {
    firstCard()
    let div = document.createElement("div")
    div.className = "ranges"
    let widthControl = document.createElement('input')
    widthControl.type = 'range'
    widthControl.className = 'range'
    widthControl.value = ''
    widthControl.id = 'width'
    widthControl.min = '200'
    widthControl.max = '800'
    widthControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.width = widthControl.value+"px" )
    })
    let fontSizeControl = document.createElement('input')
    fontSizeControl.type = 'range'
    fontSizeControl.className = 'range'
    fontSizeControl.value = ''
    fontSizeControl.id = 'fontSize'
    fontSizeControl.min = '20'
    fontSizeControl.max = '40'
    fontSizeControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.fontSize = fontSizeControl.value+"px" )
    })
    let backgroundControl = document.createElement('input')
    backgroundControl.type = 'range'
    backgroundControl.className = 'range'
    backgroundControl.value = ''
    backgroundControl.id = 'background'
    backgroundControl.min = '20'
    backgroundControl.max = '75'
    backgroundControl.addEventListener('input', () => {
        let allCards = document.querySelectorAll('.gossip')
        allCards.forEach(card => card.style.background = `hsl(280, 50%, ${backgroundControl.value}%`) 
    })
    div.appendChild(widthControl)
    div.appendChild(fontSizeControl)
    div.appendChild(backgroundControl)
    document.body.appendChild(div)
}

const displayGossips = () => {
    return gossips.forEach(gossip => {
        let div = document.createElement("div")
        div.textContent = gossip
        div.className = "gossip"
        document.body.appendChild(div)
    })
}

const firstCard = () => {
    let firstCard = document.createElement('from')
    firstCard.className = 'gossip'
    let textArea = document.createElement('textarea')
    let button = document.createElement('button')
    button.textContent = "Share gossip!"
    firstCard.appendChild(textArea)
    firstCard.appendChild(button)
    document.body.appendChild(firstCard)
    displayGossips()
    button.addEventListener('click', () => {
        document.querySelectorAll('.gossip').forEach(gossip => gossip.remove())
        gossips.unshift(textArea.value)
        document.body.appendChild(firstCard)
        displayGossips()
    })
}
