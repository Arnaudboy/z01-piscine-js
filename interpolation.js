// j'ai dû le faire passer deux fois sur l'intra pour le valider
function interpolation(obj){
    let count = 0
    let timerId = setInterval(() => {
        obj['callback']([obj['start']+((count)*((obj['end']-obj['start'])/obj['step'])),(count+1)*(obj['duration']/obj['step'])])
        count++
        if(count === obj['step']){clearInterval(timerId)}
    }, obj['duration']/obj['step'])
}
