function filterKeys(db, fn){
    let obj = {}
    for(const [key, value] of Object.entries(db)){
        if(fn(key)){obj[key]=value}
    }
    return obj
}

function mapKeys(db, fn){
    let obj = {}
    for(const [key, value] of Object.entries(db)){
        obj[fn(key)] = value
    }
    return obj
}

function reduceKeys(db, fn, start) {
    let acc =  start === undefined ? Object.keys(db)[0] : start
    for(const key of Object.keys(db)){
        if(key !== Object.keys(db)[0] || start !== undefined){
            acc = fn(acc, key) 
        }       
    }
    return acc
}