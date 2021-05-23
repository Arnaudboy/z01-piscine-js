export function build(num) {
    let i = 1
    let interval = setInterval(() => {
        let block = document.createElement("div")
        block.id = `brick-${i}`
        document.body.append(block)
        if((i)%3===2) {block.dataset.foundation = true}
        if(i===num){clearInterval(interval)} 
        i++
    }, 100)
   
}

export function repair(...ids) {
    for(let id of ids){
        let elem = document.getElementById(id)
        console.log(elem)
        if(elem.dataset.foundation){
            elem.dataset.repaired = 'in progress'
        } else {
            elem.dataset.repaired =  true
        }
    }
}

export function destroy() {
    let arr = document.querySelectorAll("div")
    return arr[arr.length-1].remove()
}