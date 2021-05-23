function round(num) {
    let entier = (num-(num%1));
    console.log(num-entier)
    if(Math.abs(num-entier)<=0.5){
        return entier
    } else {
        if(entier < 0) {
            return entier-1
        } else {
            return entier+1
        }
        
    }
}
function ceil(num) {
    if((num-(num%1))===num || num<=0) {
        return (num-(num%1))
    } else {
        return (num-(num%1))+1
    }
}

function floor(num) {
    if(num>= 0){
        return (num-(num%1))
    }else {
        return (num-(num%1))-1
    }
}

function trunc(num) {
    return (num-(num%1))
}
// export const tests = []
// const t = (f) => tests.push(f)
// const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0]


//console.log(nums.map(round), [3, -3, 3, -3, 0])
// console.log(nums.map(floor), [3, -4, 2, -3, 0])
// console.log(nums.map(trunc), [3, -3, 2, -2, 0])
//console.log(nums.map(ceil), [4, -3, 3, -2, 0])