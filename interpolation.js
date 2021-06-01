// function interpolation(obj){
//     let count = 0
//     let timerId = setInterval(() => {
//         obj['callback']([obj['start']+((count)*((obj['end']-obj['start'])/obj['step'])),(count+1)*(obj['duration']/obj['step'])])
//         count++
//         if(count === obj['step']){clearInterval(timerId)}
//     }, obj['duration']/obj['step'])
// }

const interpolation = ({step, start, end, callback, duration}) => {
    let x = start
    let y = duration/step
    let timer = setInterval(() => {
        callback([x, y])
        x += (end-start)/step
        y += duration/step
        if(Math.round(x*100)/100===end) clearInterval(timer)
    }, duration/step)
}
