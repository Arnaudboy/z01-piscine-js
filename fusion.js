function fusion(arg1, arg2) {
    let nArg1 = Object.assign({}, arg1)
    let nArg2 = Object.assign({}, arg2)
    if(Array.isArray(nArg1)){return fusionArray(nArg1, nArg2)}
    else if (typeof nArg1 === 'string'){return fusionString(nArg1, nArg2)}
    else if (typeof nArg1 === 'number'){return fusionNumber(nArg1, nArg2)}
    else {return fusionObject(nArg1, nArg2)}
}

function fusionNumber(arg1, arg2) {
    return arg1 + arg2
}
function fusionString(arg1, arg2) {
    return arg1.concat(' ', arg2)
}
function fusionArray(arg1, arg2) {
    return arg1.concat(arg2)
}

function fusionObject(arg1, arg2) {
    for(const key in arg2){
        if(key in arg1 && Array.isArray(arg1[key]) && Array.isArray(arg1[key])){
            arg1[key] = fusionArray(arg1[key], arg2[key])
        }
        else if(key in arg1 && typeof arg1[key] === 'string'&& typeof arg1[key] === 'string'){
            arg1[key] = fusionString(arg1[key], arg2[key])
        }
        else if(key in arg1 && typeof arg1[key] === 'number'&& typeof arg1[key] === 'number'){
            arg1[key] = fusionNumber(arg1[key], arg2[key])
        }
        else if(key in arg1 && Object.prototype.toString.call(arg1[key]) === '[object Object]' && Object.prototype.toString.call(arg2[key]) === '[object Object]') {
            arg1[key] = fusionObject(arg1[key], arg2[key])
        }
        else {
            arg1[key] = arg2[key]
        }
    }
    return arg1
}

// function fusion(arg1, arg2) {
//     let obj = {}
//     let keys = Object.keys(arg1).length > Object.keys(arg2).length ? Object.keys(arg1) : Object.keys(arg2)
//     let values2 = Object.values(arg2)
//     if(typeof Object.values(arg1)[0] === 'number'){return isNumber(arg1, arg2, keys)}
//     if(typeof Object.values(arg1)[0] === 'string'){return isString(arg1, arg2, keys)}
//     if(Array.isArray(Object.values(arg1)[0])){return isArray(arg1, arg2, keys)}
//     if(typeof Object.values(arg1)[0] === 'object' && typeof Object.values(arg2)[0] === 'object'){
//         console.log("vfdsvdsf")
//         return fusion(Object.values(arg1)[0], Object.values(arg2)[0])}
//     else{
//         console.log(Object.keys(arg1)[0], Object.values(arg2)[0])
//         obj[keys[0]] = values2[0]
//     console.log(obj)
// return obj}
//     //keys.forEach(key => {console.log(arg1[key]); obj[key] = arg1[key]+arg2[key]})
// }

// function isNumber(arg1, arg2, keys) {
//     let obj = {}
//     keys.forEach(key => {
//         if(!arg1[key]){arg1[key] = 0}
//         if(!arg2[key]){arg2[key] = 0}
//         obj[key] = arg1[key]+arg2[key]})
//     return obj
// }

// function isString(arg1, arg2, keys) {
//     let obj = {}
//     keys.forEach(key => {
//         if(typeof arg2[key] === "undefined"){obj[key] = arg1[key]}
//         else {obj[key] = arg1[key]+' '+arg2[key]}})
//     return obj
// }

// function isArray(arg1, arg2, keys) {
//     let obj = {}
//     keys.forEach(key => {
//         if(!arg1[key]){arg1[key] = []}
//         if(!arg2[key]){arg2[key] = []}
//         obj[key] = [...arg1[key], ...arg2[key]]})
//     return obj
// }