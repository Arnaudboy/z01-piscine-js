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
        if(key in obj && value.carbs*(obj[key]/100) < 50){res[key] = obj[key]}
    }
    return res
}

function totalCalories(obj){
    let res = 0
    for(const [key, value] of Object.entries(nutritionDB)){
        if(key in obj){res += Math.round(value.calories*obj[key])}
    }
    return res/100
}

function cartTotal(obj){
    let res = {}
    for(const [key, value] of Object.entries(nutritionDB)){
        if(key in obj){
            let specs = {}
            Object.keys(value).forEach(val => specs[val] = (Math.round((value[val]*(obj[key]))*100))/10000)
            res[key] = specs
        }
    }
    return res
}