function pick(obj, keys) {
    let res = {}
    if(Array.isArray(keys)) {
        keys.forEach(key => {if(Object.keys(obj).includes(key)){res[key] = obj[key]}})
    }
    else if (Object.keys(obj).includes(keys)){
        res[keys] = obj[keys]
    }
    return res
}

function omit(obj, keys) {
    let res = {}
    Object.keys(obj).forEach(key => {
        if(!keys.includes(key)){
            res[key] = obj[key]
        }})
    
    return res
}