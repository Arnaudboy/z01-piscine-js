function deepCopy(arg){
    let result = Array.isArray(arg) ? [] : {}
    for (let key in arg) {
      if(Object.prototype.toString.call(arg[key]) === '[object Object]' || Object.prototype.toString.call(arg[key]) === '[object Array]')
        result[key] = deepCopy(arg[key])
      else
        result[key] = arg[key]
    }
    return result
}