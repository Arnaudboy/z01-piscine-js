function invert(obj) {
    let res = {}
    Object.keys(obj).forEach(key => {res[obj[key]] = key})
    return res
}


// function invert(obj) {
//     let obj2 = {}
//     let keys = Object.keys(obj)
//     keys.forEach(key => {
//         let val = obj[key]
//         obj2[val] = key
//     })
//     return obj2
// }