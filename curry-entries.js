function defaultCurry(obj1){
    return function(obj2){
        let res = {}
        let keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]
        for(const key of keys){
            if(key in obj1 && !(key in obj2)){res[key] = obj1[key]}
            else{res[key] = obj2[key]}           
        }
        return res
    }
}

function mapCurry(fn){
    return function(obj){
        for(const key in obj){
            return Object.fromEntries([fn([key, obj[key]])])
        }
    }
}

function reduceCurry(fn){
    return function(obj, init=0){
        for(const [key, value] of Object.entries(obj)){
            init = fn(init, [key, value])
        }
        return init
    }
}

function filterCurry(fn){
    return function(obj){
        let res = {}
        for(const [key, value] of Object.entries(obj)){
            if(fn([key, value])){res[key] = value}
        }
        return res
    }
}

function reduceScore(obj, init=0){
    Object.values(obj).forEach(elem => {if(elem['isForceUser']){init += Object.values(elem).slice(1).reverse().slice(1).reverse().reduce((accumulator, currentValue) => accumulator + currentValue)}})
    return init 
}

function filterForce(obj){
    let res = {}
    for(const [key, value] of Object.entries(obj)){
        if(value['isForceUser'] && value['shootingScore'] >= 80){res[key] = value}
    }
    return res
}

function mapAverage(obj){
    for(const [key, value] of Object.entries(obj)){
        value['averageScore'] = (value['pilotingScore']+value['shootingScore'])/2
    }
    return obj
}
