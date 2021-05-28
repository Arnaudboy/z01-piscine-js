function replica(...args){
    let res = args[0]
    args.forEach(arg => {
        Object.keys(arg).forEach(key =>{
            if(Object.prototype.toString.call(arg[key]) === '[object Object]' && Object.prototype.toString.call(res[key]) === '[object Object]'){replica(res[key], arg[key])}
            else{res[key] = arg[key]}
        })
    })
    return res
}