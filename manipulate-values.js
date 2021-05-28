function filterValues(db, fn) {
    let obj = {}
    for(const key in db) {
        if(fn(db[key])){obj[key] = db[key]}
    }
    return obj
}

function mapValues(db, fn) {
    let obj = {}
    for(const key in db) {
        obj[key] = fn(db[key])
    }
    return obj
}

function reduceValues(db, fn, start=0) {
    for(const key in db) {
        start = fn(start, db[key])
    }
    return start
}