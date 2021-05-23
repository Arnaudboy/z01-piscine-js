function multiply(a, b) {
    let res = 0
    for(let i=0; i<Math.abs(a); i++) {
        res += Math.abs(b)
    }
    if ( a<0 && b<0 ) {
        return Math.abs(res)
    }
    if (a<0 || b<0) {
        return -res
    } 
    return res
}

function divide(a, b) {
    if(a<0 && b<0) {
        let res = multiply(a , (Math.pow(b, -1)))
        return Math.floor(res)
    }
    if(a<0 || b<0) {
        let res = multiply(a , (Math.pow(b, -1)))
        return Math.ceil(res)
    }
    let res = multiply(a , (Math.pow(b, -1)))
    return Math.floor(res)
}


function modulo(a, b){
    // parseInt garde la partie entière
    let Ndiv = parseInt(divide(a,b));
    let N = multiply(Ndiv, b)
    let mod = Math.abs(a - N) 
    
    if ((a < 0 && b <0) || (a < 0 && b > 0)) mod = -mod

    return mod  
}
