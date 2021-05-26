function pick(obj, keys) {
    let res = {}
    Object.keys(obj).forEach(key => {if(keys.includes(key)){res[key] = obj[key]}})
    return res
}