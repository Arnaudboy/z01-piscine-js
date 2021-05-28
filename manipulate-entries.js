function filterEntries(obj, fn) {
    let res = {}
    for(const [key, value] of Object.entries(obj)) {
        if(fn([key, value])){res[key] = value}
    }
    return res
}

function mapEntries(obj, fn) {
    let res = []
    for(const [key, value] of Object.entries(obj)) {
        res.push(fn([key, value]))
    }
    return Object.fromEntries(res)
}

function reduceEntries(obj, fn) {
    let acc = ""
    for(const [key, value] of Object.entries(obj)){
        acc = fn(acc, [key, value])
    }
    return acc
}

function lowCarbs(obj){
    let res = {}
    for(const [key, value] of Object.entries(nutritionDB)){
        console.log(key, value.carbs)
        if(key in obj && value.carbs < 50){res[key] = obj[key]}
    }
    return res
}